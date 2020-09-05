import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

    id: string = null;
    new: Boolean = null;
    project: any = {
        date: '',
        name: '',
        category: '',
        desc: '',
        tags: '',
        repo: '',
        www: '',
        preview: '',
        images: []
    };

    constructor(private storage: AngularFireStorage, private afs: AngularFirestore) { }

    getProjects() {
        return this.afs.collection<any>('projects', ref => ref.orderBy('date')).valueChanges({ idField: 'id' });
    }

    getProject(id) {
        return this.afs.doc<any>('projects/' + id).valueChanges();
    }

    initialize(id: string) {
        if (id != null) {
            this.new = false;
            this.id = id;
            this.afs.doc<any>('projects/' + id).valueChanges().subscribe((project)=>{
                this.project = project;
            });
        } else {
            this.new = true;
            this.id = this.afs.createId();
            this.project.date = new Date();
        }
    }

    upload(images) {
        // Uplod each image to the storage and getting back the url
        images.forEach(image => {
            let name = image.name.split('.')[0];
            let path = 'projects/' + this.id + '/images/' + name;

            // If image name already exsists than remove it from project
            this.project.images.forEach(image => {
                if (image.name == name) {
                    let project = {
                        images: this.project.images.filter(image => image.name !== name)
                    }
                    this.afs.collection('projects').doc(this.id).update(project);
                }
            });

            // Uploading
            this.storage.ref(path).put(image).then(()=>{
                // Getting url back
                this.storage.ref(path).getDownloadURL().subscribe((url)=>{
                    let temp = {
                        name: name,
                        url: url
                    };
                    this.project.images.push(temp);
                    if (name == 'preview') {
                        this.project.preview = url;
                    }
                });
            });
        });
    }

    submit(form) {
        this.project.name = form.name;
        this.project.category = form.category;
        this.project.desc = form.desc;
        this.project.tags = form.tags;
        this.project.repo = form.repo;
        this.project.www = form.www;

        if (this.new == true) {
            this.afs.collection('projects').doc(this.id).set(this.project);
        } else if (this.new == false) {
            this.afs.collection('projects').doc(this.id).update(this.project);
        } else {
            console.log('error');
        }
    }

}










// import { Injectable } from '@angular/core';
// import { AngularFireStorage } from '@angular/fire/storage';
// import { AngularFirestore } from '@angular/fire/firestore';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProjectsService {

//     constructor(private storage: AngularFireStorage, private afs: AngularFirestore) { }

//     submit(form, images, projectId: string = null) {
//         let project = {
//             name: form.name,
//             images: images.images,
//             preview: images.preview
//         }

//         if (projectId == null) {
//             this.afs.collection('projects').doc(this.afs.createId()).set(project);
//         } else {
//             this.afs.collection('projects').doc(projectId).update(project);
//         }
//     }

//     async uploadImages(images: Array<any>, projectPath: string, projectImages: any = null, projectId: string = null) {
//         // Object to be returned
//         let data = {
//             images: [], // urls of uploaded images
//             preview: '' // url of image named 'preview'
//         }
//         // Uplod each image to the storage and getting back the url
//         images.forEach(image => {
//             let name = image.name.split('.')[0];
//             let path = projectPath + name;

//             // If image name already exsists than remove it from project
//             if (projectId != null) {
//                 projectImages.forEach(image => {
//                     if (image.name == name) {
//                         let project = {
//                             images: images.filter(image => image.name !== name)
//                         }
//                         this.afs.collection('projects').doc(projectId).update(project);
//                     }
//                 });
//             }

//             // Uploading
//             this.storage.ref(path).put(image).then(()=>{
//                 // Getting url back
//                 this.storage.ref(path).getDownloadURL().subscribe((url)=>{
//                     let temp = {
//                         name: name,
//                         url: url
//                     };
//                     data.images.push(temp);
//                     if (name == 'preview') {
//                         data.preview = url;
//                     }
//                 });
//             });
//         });

//         return data;
//     }
// }
