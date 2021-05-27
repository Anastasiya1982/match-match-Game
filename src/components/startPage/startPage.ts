import './startPage.scss'

import {BaseComponent} from "../baseComponent";


export class StartPage extends BaseComponent{
    constructor() {
        super('div',['start-page']);
        this.element.innerHTML=`
       <div class="start-page__forest"</div>
            <div class="start-page__silhouette"></div>
            <div class="start-page__moon"></div>
            <div class="start-page__container">
                <h1>Match-Match-Game</h1>
            </div>  `;
    }

}
