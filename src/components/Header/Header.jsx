import Button from "../Buttons/Button";
import "./style.css"
import car from '../../assets/img/car1.png'

export default function Header() {
    return (
        <header>
            <div className="header-left">
                <h1 className="text-header">The World's Best Luxury Car Deals</h1>
                <p className="paragraf">HKinvestor can provide rentals of the most exclusive cars like Ferrari and Lamborghini.</p>
                <div className="btn-group-header">
                    <Button className={"orange"} name={"Buy Now"} />
                    <Button className={"orange_secondary"} name={"Video Introduction"} />
                </div>
                <div className="text-number-followers">
                    <div className="text-all">
                        <h1 className="text-number">500+</h1>
                        <p className="text-name">Luxury Cars</p>
                    </div>
                    <div className="text-all">
                        <h1 className="text-number">#1</h1>
                        <p className="text-name">Best Deal Car</p>
                    </div>
                </div>
            </div>

            <div className="header-right">
                <img src={car} alt="" className="car-image" />
            </div>
        </header>
    )
}