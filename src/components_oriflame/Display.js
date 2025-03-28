import first from "../Resources/Head.JPG"


export default function Display(props){
    return(
        <div className="picturelayout">
            <div className="rowBSS"> 
            {/* one big and two small */}
                <div className="solo">
                    <img src={first} />
                </div>
                <div className="ditto">
                <img src={first} />
                <img src={first} />
                </div>
            </div>
        </div>
    )
}