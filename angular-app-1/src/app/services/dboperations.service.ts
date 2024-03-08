import { Injectable } from '@angular/core';
import {DocumentData, addDoc, collection, doc, getDoc, getDocs, getFirestore} from 'firebase/firestore';
import { snippet } from '../models/Snippet';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
}) 
export class DboperationsService {
  private db?:any;

  constructor(private auth:AuthService, private router : Router) { 
    this.db = getFirestore()
  }

  async createSnippet(snippet : snippet){
    try{
      const docRef = await addDoc(collection(this.db, "codes"),{
        ...snippet,
        by: this.auth.getUserId()
      })
      // console.log("Document Created with Id : ",docRef.id);
      this.router.navigate(['/'])
      
    }catch(err){
      console.error("Error adding document : ", err);
      alert("Error While Adding ")
    }
  }

  async getAllSnippet(){
    let result: DocumentData[]=[];

    const querySnapShot = await getDocs(collection(this.db, "codes"));
    querySnapShot.forEach((doc)=>{
      result.push({id: doc.id, ...doc.data()});
    })
    return result;
  }

  async getSnippetById(docId:string){
    const docRef=  doc(this.db, "codes", docId);
    const docSnap=await getDoc(docRef);

    if(docSnap.exists()){
      console.log("Document exists : ", docSnap.data());
      return  docSnap.data();
    }else{
      return {
        id:"0",
        title:"not found",
        code : "not found"
      }
    }
  }
}
