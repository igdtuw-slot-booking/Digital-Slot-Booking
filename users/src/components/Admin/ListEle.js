import tick from "./ImagesAdmin/tick.png";
import cross from "./ImagesAdmin/cross.png";


export default function ListEle(){
    return(
        <tr>
            <td className="Date">28 AUG</td>
            <td>
                <tr className="Type">
                    Orientation
                </tr>
                <tr className="Info">
                    Celestial Biscuit IGDTUW
                </tr>
                <tr className="Info">
                    Pooja Gera
                </tr>
            </td>
            <td className="Venue">Auditorium</td>
            <td className="Equipment">Equipments Required</td>
            <td clasName="ttime">1:00 PM</td>
            <td>02:00 hrs</td>
            <td>
                <img src={tick} className="tick" />
            </td>
            <td>
                <img src={cross} className="cross" />
            </td>
            <td className="tick"></td>
            <td className="cross"></td>
        </tr>
    )
}