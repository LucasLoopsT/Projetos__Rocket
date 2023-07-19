import { Nav } from "./navs.js";

export class Rounter {
    
    nav = new Nav();

    routes = {}
    
    add(routeName, page){
        this.routes[routeName] = page;
    }

    //Captura o link que foi pressionado e passa para o handle
    route(ev){
        ev = ev || window.event
        ev.preventDefault()
    
        window.history.pushState({}, "", ev.target.href)
        this.handle();
    }

    handle(){
        const {pathname} = window.location;
        const route = this.routes[pathname] || this.routes[404];
        if(pathname == "/"){
            this.nav.homePressed();
        }
        if(pathname == "/about"){
            this.nav.UniversePressed();
        }
        if(pathname == "/contact"){
            this.nav.ExplorerPressed();
        }
    
        //Promessa de buscar o route em que cliquei e exibir o conteúdo
        fetch(route)
        .then(data => data.text())
        .then(contentHtml => {
            document.querySelector("#page").innerHTML = contentHtml;
        });
    }
}