import { Component, OnInit } from '@angular/core';
import { SelectionService } from 'src/app/services/selection.service';

@Component({
  selector: 'app-ma-selection',
  templateUrl: './ma-selection.component.html',
  styleUrls: ['./ma-selection.component.css']
})
export class MaSelectionComponent implements OnInit {
  produitsSelectionnes: any[] = [];

  constructor(private selectionService: SelectionService) { }

  ngOnInit(): void {
    this.produitsSelectionnes = this.selectionService.getProduitsSelectionnes();
  }

  supprimerProduit(produit: any): void {
    const confirmation = confirm("Êtes-vous sûr de vouloir supprimer ce produit du panier ?");
    if (confirmation) {
      this.selectionService.removeFromSelection(produit);
      console.log('Produit supprimé du panier :', produit);
    }
  }
}
