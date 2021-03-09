import React from 'react';

class DietPlanInfo extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h4 className="display-4 text-center text-dark">Diet Plans</h4><br/>
                <div className="container-fluid">
                    <div className="row">                     
                        <div className="col-md-3">
                            <div class="box">
                            <img src="/v1.jpg" height="120px" width="120px" />
                                <h3 class="heading">LIGHT VEG</h3>
                                <div className="body">
                                FoodType: &nbsp;Light Veg<br/><br/>
                                Description:&nbsp;<p>It is a 30 days plan. Food with low calories and medium protien will be provided.</p>
                               <span> Carbs Ratio : 0.5 </span><br/> 
                                <span>Protein Ratio : 1.0 </span><br/>
                                <span>Fat Ratio : 1.5 </span>
                                
&nbsp;<br/>
                               
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div class="box ">
                            <img src="/v2.jpg"  height="120px" width="120px"/>
                                <h3 class="heading">HEAVY VEG</h3>
                                <div className="body">
                                FoodType: &nbsp;Heavy Veg<br/><br/>
                                Description:&nbsp;<p>It is a 60 days plan. Food with High calories and High protien will be provided.</p>
                                <span> Carbs Ratio : 1.0 </span><br/> 
                                <span>Protein Ratio : 1.5 </span><br/>
                                <span>Fat Ratio : 1.5 </span>
                                &nbsp;<br/>
                                </div>
 
                            </div>
                            </div>
                            <div className="col-md-3">
                            <div class="box">
                                <img src="/n1.jpg" height="120px" width="120px" />
                                <h3 class="heading">LIGHT NON-VEG</h3>
                                <div className="body">
                                FoodType: &nbsp;Light Non-Veg<br/><br/>
                                Description:&nbsp;<p>It is a 40 days plan. Food with low calories and high protien will be provided.</p>
                                <span> Carbs Ratio : 1.5 </span><br/> 
                                <span>Protein Ratio : 2.0 </span><br/>
                                <span>Fat Ratio : 2.5 </span>
                                &nbsp;<br/>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-3">
                            <div class="box">
                                <img src="/n2.jpg" height="120px" width="120px" />
                                <h3 class="heading">HEAVY NON-VEG</h3>
                                <div className="body">
                                FoodType: &nbsp;Heavy Non-Veg<br/><br/>
                                Description:&nbsp;<p>It is a 80 days plan. Food with medium calories and medium protien will be provided.</p>
                                <span> Carbs Ratio : 2.5 </span><br/> 
                                <span>Protein Ratio : 4.0 </span><br/>
                                <span>Fat Ratio : 3.0 </span>
                                &nbsp;<br/>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                   
            
       
            </React.Fragment>
        );
    }
}
 
export default DietPlanInfo;