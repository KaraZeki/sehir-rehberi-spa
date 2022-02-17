import { City } from "./city";

export class Photo {
    id:number=0;
    cityId:number=0;
    dateAdded:Date=new Date;
    description:string="";
    isMain:boolean=false;
    url:string="";
    city:City=new City;
    publicId:string="";
}
