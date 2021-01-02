import React from 'react';

const Card=(props)=>{
    return(<>
  <div className="col-md-6 col-xs-3 d-flex justify-content-center">
            <div className="card" style={{ width: "18rem",marginTop:'10px' }}>
              <img
                src={props.imgsrc}
                className="card-img-top" style={{height:'200px',width:'auto',borderTopLeftRadius:'30px',borderTopRightRadius:'30px'}}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title cardTitle">{props.title}</h5>
                <p className="card-text">
                {props.text}  </p>
                <a href={props.link} className="btn btn-outline-primary">
                  learn more
                </a>
              </div>
            </div>
          </div> 
        
    </>)
}

export default Card;