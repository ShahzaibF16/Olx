import React, {useEffect, useState} from 'react';
import AdItem from './AdItem';

function HomePage(){

    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect ( () => {
        if (loading) {
            let _list = [];
            for (let i = 0; i < 20; i++){
                _list.push(<AdItem placeholder={true} />);
            }
            setList(_list);        
        }
    }, list);

    return(
        <React.Fragment>
        <div className="home-page ">
            <div className="as-list flex">
            {list}
            </div>
            <button className="load-more fontb c333 s18 anim">
                Load More
            </button>
        </div>
        <div className="app-ribbon aic flex">
            <div className="img">
                <img className="bl" src="https://statics.olx.com.pk/external/base/img/phone-app.webp" />
            </div>
            <div className="meta">
                <h2 className="title fontb s30 color">TRY THE OLX APP</h2>
                <h2 className="title fontb s18 color">Buy, sell and find just about anything!</h2>
            </div>
            <div className="links">
             <h2 className="title fontb s20 color">GET YOUR APP TODAY</h2>
             <div className="flex as">
                <a href="#" className="noul bl"><img src="https://statics.olx.com.pk/external/base/img/appstore_2x.webp" /></a>
                <a href="#" className="noul bl"><img src="https://statics.olx.com.pk/external/base/img/playstore_2x.webp" /></a>
             </div>
            </div>
        </div>
        </React.Fragment>
    )
}
export default HomePage;