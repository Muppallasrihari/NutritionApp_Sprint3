import React from 'react';
import { connect } from 'react-redux';
import { createDietPlan } from '../../Actions/DietPlanActions';
import PropTypes from 'prop-types';
import { getDietPlan } from '../../Actions/DietPlanActions';
class UpdateDietPlan extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:"",
            foodType:"",
            description:"",
            fatRatio:"",
            carbsRatio:"",
            proteinRatio:"",
            errors:{}
        };
        this.onSubmit=this.onSubmit.bind(this);
        this.onChange=this.onChange.bind(this);
    }

    onSubmit=(event)=>{
        event.preventDefault();
        const updateDietPlan = {
            id:this.state.id,
            foodType:this.state.foodType,
            description:this.state.description,
            fatRatio:this.state.fatRatio,
            carbsRatio:this.state.carbsRatio,
            proteinRatio:this.state.proteinRatio
        }
        this.props.createDietPlan(updateDietPlan,this.props.history);
    }

    componentWillReceiveProps(nextProps){
        const {
           id,
           foodType,
           description,
           fatRatio,
           carbsRatio,
           proteinRatio
        } = nextProps.dietplan;
        this.setState({
           id,
           foodType,
           description,
           fatRatio,
           carbsRatio,
           proteinRatio
        })
    }
    componentDidMount(){
        const {id}= this.props.match.params; 
        this.props.getDietPlan(id,this.props.history);
    }
    onChange(event){
        this.setState({[event.target.name]:event.target.value});
    }

    render(){
        return(
            <div className="dietplans update-dietplan-background"> 
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Update Diet Plan</h5>
                        <hr />
                        <form onSubmit={this.onSubmit} >
                            <div className="form-group">
                                {/* <label>Food Type</label> */}
                                <input type="text" 
                                className="form-control form-control-lg "
                                placeholder="Food Type" 
                                name="foodType" 
                                value={this.state.foodType}
                                onChange={this.onChange}/>
                            </div>

                            <div className="form-group">
                                {/* <label>Description</label> */}
                                <input type="text" 
                                className="form-control form-control-lg "
                                placeholder="Description" 
                                name="description" 
                                value={this.state.description}
                                onChange={this.onChange}/>
                            </div>
                            
                            <div className="form-group">
                                {/* <label>Fat Ratio</label> */}
                                <input type="text" 
                                className="form-control form-control-lg "
                                placeholder="Fat Ratio" 
                                name="fatRatio" 
                                value={this.state.fatRatio}
                                onChange={this.onChange}/>
                            </div>

                            <div className="form-group">
                            {/* <label>Carbs Ratio</label> */}
                                <input type="text" 
                                className="form-control form-control-lg "
                                name="carbsRatio" 
                                value={this.state.carbsRatio}
                                placeholder="Carbs Ratio" 
                                onChange={this.onChange}/>
                            </div>

                            <div className="form-group">
                                {/* <label>Protein Ratio</label> */}
                                <input type="text" 
                                className="form-control form-control-lg "
                                name="proteinRatio" 
                                value={this.state.proteinRatio}
                                placeholder="Protein Ratio" 
                                onChange={this.onChange}/>
                            </div>

                            <input type="submit" className="btn btn-dark btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }            
}
UpdateDietPlan.propTypes ={
    getDietPlan:PropTypes.func.isRequired,
    createDietPlan:PropTypes.func.isRequired,
    dietplan:PropTypes.object.isRequired
}
const mapStateToProps=state=>({
    dietplan:state.dietplans.dietplan,
});
export default connect(mapStateToProps,{getDietPlan,createDietPlan})(UpdateDietPlan);
