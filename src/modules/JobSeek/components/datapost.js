import React from 'react'
import calculateDateInFormat from '../../../utils/calculateDate'
import FormWrapper from '../../../components/Card'
import '../cssstyling/datapost.css'
import  Briefcase  from 'react-bootstrap-icons/dist/icons/briefcase';
import  Info  from 'react-bootstrap-icons/dist/icons/info';
import   Envelope from 'react-bootstrap-icons/dist/icons/envelope';
const Post=(props)=>{
    return(
            // <FormWrapper onClick={props.click}>
            //     <h2>{props.title}</h2>
            //      <p>
            //       <span className="cardDisplay">{props.companyName}</span> 
            //       <span className="cardDisplay">{props.min} - {props.max}</span> 
            //       <span className="cardDisplay">{props.name}</span>
            //       <span className="cardDisplay">{calculateDateInFormat(props.createdTimeMs)}</span>
                  
            //      </p>
            // </FormWrapper>
            <div className="card mb-3 rounded"> 
                 
               <div className="card-body row">

                 <a><img className="logo-image" src="https://staticlogo.hirist.com/4385-100X100.png"/></a>
                 
                    <div className="card-title col-md-9">
                           <h6 style={{fontWeight:"bold"}}>{props.title}</h6>
                        <span>
                        <span className="erYkXI"></span>
                        <span className="dark_grey">{props.companyName}</span>
                        </span>
                        <span>
                          <span className="erYkXI"></span>
                          <span className="dark_grey">{ } {props.min} - {props.max}  years</span> 
                        </span>
                       <span>
                       <span className="erYkXI"></span>
                       <span className="dark_grey"> {props.name}</span>
                       </span>
                      <span>
                      <span className="erYkXI"></span>
                      <span className="dark_grey"> {calculateDateInFormat(props.createdTimeMs)}</span>
                      </span>
                    </div>
                <div className="col-md-3">

                   <div className="row">

                  


                 
                  
                  <div class="job-info">
                      <div className="in-block">
                       <span className="circle-around show-tooltip ">
                       <Briefcase className="AA"/>
                       <div className="set-tooltip sc-cmTdod loYhmE">
                           <i></i>

                       </div>
                       </span>
                       <p className="job-info_more">Premium</p>
                      </div>
                  </div>

                  <div class="job-info ">
                      <div className="in-block">
                       <span className="circle-around show-tooltip ">
                       <Info className="AA"/>
                       <div className="set-tooltip sc-cmTdod loYhmE">
                           <i></i>

                       </div>
                       </span>
                       <p className="job-info_more">Info</p>
                      </div>
                  </div>
                  
                  <div class="job-info ">
                      <div className="in-block">
                       <span className="circle-around show-tooltip ">
                       <Envelope className="AA"/>
                       <div className="set-tooltip sc-cmTdod loYhmE">
                           <i></i>

                       </div>
                       </span>
                       <p className="job-info_more">Save</p>
                      </div>
                  </div>
                        
                 </div>
                 
              </div>
              </div>


            </div>
           
           


         );
}

export default Post