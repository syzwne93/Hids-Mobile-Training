
ion-button routerLink="/search" >CARIAN</ion-button>

ion-content {
    color: #fff !important;
  --background: url("../../assets/imgs/bg.png") 0 0/100% 100% no-repeat;
  }


    <ion-back-button defaultHref="/tabs/tab1"></ion-back-button>


div>
    ion-input type="text" placeholder="SUMBER"></ion-input>

                   <ion-item id="rounded">
                <ion-datetime displayFormat="DD/MM/YYYY" pickerFormat="DD MMMM YYYY" placeholder="" min="1400" required="required" [dayNames]="hids.dayNames" [monthNames]="hids.monthNames" </ion-datetime>
            </ion-item>
        
            <ion-item id="rounded">
                <ion-datetime displayFormat="DD/MM/YYYY" pickerFormat="DD MMMM YYYY" placeholder="" min="1400" required="required" [dayNames]="hids.dayNames" [monthNames]="hids.monthNames" [doneText]="hids.labels[20]" [cancelText]="hids.labels[21]" ></ion-datetime>
            </ion-item>
              
div>


css

ion-input{
    --color: rgb(22, 21, 21);
    --background: #f8f6f6; 
    width: 100%;
    height: 70%;
    padding: 2px 20px !important;
    margin: 6px 0 !important;
    display: inline-block;
    border-radius: 4px;
}
#rounded {
  width: 100%;
  margin-bottom: 10px;
  border: 5px solid rgba(53, 46, 46, 0.5);
}



http://www.omdbapi.com/?s=saw&type=movie&apikey=7d683b5

ionic start movieApp blank --type=angular
cd movieApp
 
# Use the CLI to generate some pages and a service
ionic g page pages/movies
ionic g page pages/movieDetails
ionic g service services/movie







