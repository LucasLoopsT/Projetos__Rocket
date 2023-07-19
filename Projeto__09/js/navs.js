export class Nav {
    homeNav = document.querySelector("#home");
    UniversoNav = document.querySelector("#universo");
    ExplorerNav = document.querySelector("#explorer");

    homePressed(){
        this.homeNav.classList.add("navPressed");
        this.UniversoNav.classList.remove("navPressed");
        this.ExplorerNav.classList.remove("navPressed");
    }
    
    UniversePressed(){
        this.homeNav.classList.remove("navPressed");
        this.UniversoNav.classList.add("navPressed");
        this.ExplorerNav.classList.remove("navPressed");
    }
    ExplorerPressed(){
        this.homeNav.classList.remove("navPressed");
        this.UniversoNav.classList.remove("navPressed");
        this.ExplorerNav.classList.add("navPressed");
    }
}