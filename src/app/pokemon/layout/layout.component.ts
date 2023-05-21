import { Component } from '@angular/core'

type Tabs = 'tab-pokemons' | 'tab-favoritos'

@Component({
    selector: 'pokemon-layout',
    templateUrl: './layout.component.html',
})
export class LayoutComponent {
    public currentTab: Tabs = 'tab-pokemons'

    public pokemons: any[] = new Array(201) //total de 1010 pokemons 19-05-23
}
