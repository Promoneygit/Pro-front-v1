import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import price from './image/price.png';
import regiser from './image/register.png';
import meetpro from './image/meetpro.png';


export class Main extends Component {
          render() {
                    return (
                              <div>
                                        <Link to = '/price'><img src={price} alt="price" /></Link>
                                        <Link to = '/registerMain'><img src={regiser} alt="registerMain" /></Link>
                                        <Link to = '/meetpro'><img src={meetpro} alt="regiser" /></Link>
                              </div>
                    )
          }
}

export default Main;
