import React from 'react';

class NutritionPlans extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h4 className="display-4 text-center text-dark">Nutrition Plans</h4><br/>
                <div className="container-fluid">
                    <div className="row">     
                    <div className="col-md-2"></div>                
                        <div className="col-md-3">
                            <div class="box">
                            <img src="/silver.png" height="120px" width="120px" />
                                <h3 class="heading">Silver Plan</h3>
                                <div className="body">
                                Plan Id: &nbsp;SILVER<br/><br/>
                                Description:&nbsp;<p>It is a 30 days plan. Food with low calories and protien will be provided.</p><br/>
                                Price:&nbsp;Rs.10000<br/><br />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div class="box ">
                            <img src="/gold.jpg"  height="120px" width="120px"/>
                                <h3 class="heading">Gold Plan</h3>
                                <div className="body">
                                Plan Id: &nbsp;GOLD<br/><br/>
                                Description:&nbsp;<p>It is a 60 days plan. Food with medium calories and protien will be provided.</p><br/>
                                Price:&nbsp;Rs.20000<br/><br />
                                </div>
 
                            </div>
                            </div>
                            <div className="col-md-3">
                            <div class="box">
                                <img src="/platinum.jpg" height="120px" width="120px" />
                                <h3 class="heading">Platinum Plan</h3>
                                <div className="body">
                                Plan Id: &nbsp;PLATINUM<br/><br/>
                                Description:&nbsp;<p>It is a 90 days plan. Food with high calories and protien will be provided.</p><br/>
                                Price:&nbsp;Rs.30000<br/><br />
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-1"></div> 
                    </div>
                   
            
       
            </React.Fragment>
        );
    }
}
 
export default NutritionPlans;