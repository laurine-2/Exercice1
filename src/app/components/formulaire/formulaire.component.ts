import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent{
  
nom: string='';
prenom: string='';
student : Student[]= [];




submit (form: NgForm){
 

  if (this.student.length >= 5){
    alert ('Vous avez atiend le nombre demande ');
  }
  else if(this.nom =="" || this.prenom==""){
      alert ('vous ne pouvez pas soumettre')

    }
    else{
      let s = new Student(this.nom, this.prenom);
    this.student.push(s);
    alert ('Vous avez ajouter un utilisateur')

    }
    
   
  
 


}
}
