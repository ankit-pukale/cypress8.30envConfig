export class utility{
    getbaseUrl(){
        let envir=Cypress.env("ENV")
        if(envir=="dev"){
            return "https://www.google.com"
        }
        else if(envir=="test"){
            return "https://www.flipkart.com"
        }
        else if(envir=="preprod"){
            return "https://www.facebook.com"
        }else{
            return "https://www.youtube.com"
        }
    }
}