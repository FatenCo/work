import { Component } from '@angular/core';

@Component({
  selector: 'app-parametre-boutique',
  templateUrl: './parametre-boutique.component.html',
  styleUrls: ['./parametre-boutique.component.css']
})
export class ParametreBoutiqueComponent {
  boutique = {
    image: '',      // tu peux ajouter url d'un image 
    nom: '',
    url: '',
    localisation: ''
  };

  onImageSelect(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.boutique.image = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  }

  modifierParametres() {
    console.log('Form updated', this.boutique);
  }
}
