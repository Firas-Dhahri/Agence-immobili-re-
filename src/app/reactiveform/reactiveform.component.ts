import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})

export class ReactiveformComponent {
  //name = new FormControl('Firas',Validators.required)
    registerForm!:FormGroup;
    ngOnInit(){
      this.registerForm=new FormGroup( 
      {firstname : new FormControl('',[Validators.required, Validators.minLength(5)]),
      lastname : new FormControl('',Validators.required),
      birthdate: new FormControl('', [Validators.required]),
      Login: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required]),
      region: new FormControl('', Validators.required)
    
    },
      )
      
    }  
    validateAge(control: FormControl): { [key: string]: boolean } | null {
      const birthDate = new Date(control.value);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
  
      if (age < 18) {
        return { 'ageUnder18': true };
      }
      return null;
    }
    onCancel() {
      this.registerForm.reset(); // Réinitialise tous les champs du formulaire
    }
    onSubmit(){
console.log(this.registerForm.value)

    }

     
}

 //name = new FormControl('Firas',Validators.required)
// registerForm!:FormGroup;

 //constructor(private fb: FormBuilder) {}

// ngOnInit(): void{
  // this.registerForm= this.fb.group(
   //   {firstname : this.fb.control('')},
  // )
 //}  
 //onSubmit(){
//console.log(this.registerForm.value)

 //}