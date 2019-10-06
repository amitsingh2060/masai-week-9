import React, { Component } from 'react';
import Order from './Order';
import { Link } from 'react-router-dom';

class Book extends Component {
    render() {
        return (
            <div className="container">
                <section>
                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email </label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">submit</button>
                    </form>
                    <br></br>
                </section>

                <section>
                    <div class="card-deck">
                        <div class="card">
                            <img class="card-img-top" src="https://static.designmynight.com/uploads/2019/07/AprilMenu_Flowers-optimised.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Eat fit</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to Order Nowitional content. This content is a little bit longer.</p>
                                <Link to="/Order"> <button type="button" class="btn btn-primary">Order Now</button></Link>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div class="card">
                            <img class="card-img-top" src="https://media-cdn.tripadvisor.com/media/photo-s/04/6c/a6/18/won-ton-soup-vegetable.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Box-8</h5>
                                <p class="card-text">This card has supporting text below as a natural lead-in to Order Nowitional content.</p>
                                <button type="button" class="btn btn-primary">Order Now</button>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>

                        <div class="card">
                            <img class="card-img-top" src="https://3.bp.blogspot.com/-D1aOPU_4CDk/WJGN-9xm2HI/AAAAAAAAcEA/rda1JCyfgL4USCE-exvuedTzGCvT7J8tACLcB/s640/ping%2Bpong%2Bdiplomacy%2Bsm%2Baura%2B020taguig%2Bchinese%2Bfood%2B.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title"> Pizza Hut</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to Order Nowitional content. This card has even longer content than the first to show that equal height action.</p>
                                <button type="button" class="btn btn-primary">Order Now</button>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>


                        <div class="card">
                            <img class="card-img-top" src="https://thekittchen.com/wp-content/uploads/2017/05/Ping-Pong-Restaurant-Chicago-8.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Food</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to Order Nowitional content. This card has even longer content than the first to show that equal height action.</p>
                                <button type="button" class="btn btn-primary">Order Now</button>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>


                    </div>
                    <br></br>
                </section>


                <section>
                    <div class="card-deck">
                        <div class="card">
                            <img class="card-img-top" src="https://static.boydgaming.net/goldcoast10/assets/body_image/GC-PingPangPong-KeyFeatures-640x356.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Non Veg </h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to Order Nowitional content. This content is a little bit longer.</p>

                                <button type="button" class="btn btn-primary">Order Now </button>

                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div class="card">
                            <img class="card-img-top" src="https://media-cdn.tripadvisor.com/media/photo-s/04/6c/a6/18/won-ton-soup-vegetable.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Tea Centre</h5>
                                <p class="card-text">This card has supporting text below as a natural lead-in to Order Nowitional content.</p>
                                <button type="button" class="btn btn-primary">Order Now</button>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>

                        <div class="card">
                            <img class="card-img-top" src="https://thekittchen.com/wp-content/uploads/2017/05/Ping-Pong-Restaurant-Chicago-8.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Caffe</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to Order Nowitional content. This card has even longer content than the first to show that equal height action.</p>
                                <button type="button" class="btn btn-primary">Order Now</button>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>


                        <div class="card">
                            <img class="card-img-top" src="https://thekittchen.com/wp-content/uploads/2017/05/Ping-Pong-Restaurant-Chicago-8.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Nine</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to Order Nowitional content. This card has even longer content than the first to show that equal height action.</p>
                                <button type="button" class="btn btn-primary">Order Now</button>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>


                    </div>
                </section>

                <section>
                    <div class="card-deck">
                        <div class="card">
                            <img class="card-img-top" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/01/31/16/ping-pong.jpg?w968h681" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Non Veg </h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to Order Nowitional content. This content is a little bit longer.</p>

                                <button type="button" class="btn btn-primary">Order Now </button>

                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div class="card">
                            <img class="card-img-top" src="https://media-cdn.tripadvisor.com/media/photo-s/04/6c/a6/18/won-ton-soup-vegetable.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Tea Centre</h5>
                                <p class="card-text">This card has supporting text below as a natural lead-in to Order Nowitional content.</p>
                                <button type="button" class="btn btn-primary">Order Now</button>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>

                        <div class="card">
                            <img class="card-img-top" src="https://thekittchen.com/wp-content/uploads/2017/05/Ping-Pong-Restaurant-Chicago-8.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Caffe</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to Order Nowitional content. This card has even longer content than the first to show that equal height action.</p>
                                <button type="button" class="btn btn-primary">Order Now</button>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>


                        <div class="card">
                            <img class="card-img-top" src="https://thekittchen.com/wp-content/uploads/2017/05/Ping-Pong-Restaurant-Chicago-8.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Nine</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to Order Nowitional content. This card has even longer content than the first to show that equal height action.</p>
                                <button type="button" class="btn btn-primary">Order Now</button>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>


                    </div>
                </section>
            </div>
        );
    }
}

export default Book;