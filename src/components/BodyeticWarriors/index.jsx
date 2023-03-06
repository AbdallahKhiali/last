import React from 'react'
import "./BodyeticWarriors.scss";

const BodyeticWarriors = () => {
    return (
        <div className='bodyeticwarriors' >
            <div className="bodyeticwarriors-inner">
                <div className="bodyeticwarriors-typo">
                    <h1 className='bodyeticwarriors-hashtag' >
                        <span>
                            #BodyeticWarriors
                        </span>
                    </h1>
                    <p className='bodyeticwarriors-description'>
                        <span>
                            Share your journey on Instagram @bodyetic
                        </span>
                    </p>
                    <h1 className='bodyeticwarriors-definition'>
                        <div> Fitness is  </div>
                        <div> 50% Mental  </div>
                        <div> & 50% Physical.  </div>
                    </h1>
                </div>

                <div className='bodyeticwarriors-images' >
                    <img className='bodyeticwarriors-image men' src={require('../../img/bodyetics-warriors-img.svg').default} alt="bodyetics-warriors-img" />
                    <img className='bodyeticwarriors-image women' src={require('../../img/bodyetics-warriors-img-women.svg').default} alt="bodyetics-warriors-img-women" />
                </div>
            </div>
        </div>
    )
}

export default BodyeticWarriors