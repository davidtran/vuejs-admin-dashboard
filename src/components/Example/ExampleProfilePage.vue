<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body app-heading">
              <img class="profile-img" src="~src/assets/images/profile.png">
              <div class="app-title">
                <div class="title"><span class="highlight">Scott White</span></div>
                <div class="description">Frontend Developer</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12">
          <div class="card card-tab">
            <tab-set>
              <tab-item header="Profile">
                <div class="row">
                  <div class="col-md-3 col-sm-12">
                    <div class="section">
                      <div class="section-title"><i class="icon fa fa-user" aria-hidden="true"></i> Bio</div>
                      <div class="section-body __indent">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</div>
                    </div>
                    <div class="section">
                      <div class="section-title"><i class="icon fa fa-book" aria-hidden="true"></i> Education</div>
                      <div class="section-body __indent">Computer Engineering, Khon Kaen University</div>
                    </div>
                  </div>
                  <div class="col-md-9 col-sm-12">
                    <div class="section">
                      <div class="section-title">Activities</div>
                      <div class="section-body">
                        <div class="media social-post">
                          <div class="media-left">
                            <a href="#">
                              <img src="~src/assets/images/profile.png">
                            </a>
                          </div>
                          <div class="media-body">
                            <div class="media-heading">
                              <h4 class="title">Scott White</h4>
                              <h5 class="timeing">20 mins ago</h5>
                            </div>
                            <div class="media-content">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
                              Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                              ac nisi vulputate.</div>
                            <div class="media-action">
                              <button class="btn btn-link"><i class="fa fa-thumbs-o-up"></i> 2 Like</button>
                              <button class="btn btn-link"><i class="fa fa-comments-o"></i> 10 Comments</button>
                            </div>
                            <div class="media-comment">
                              <input type="text" class="form-control" placeholder="comment...">
                            </div>
                          </div>
                        </div>
                        <div class="media social-post">
                          <div class="media-left">
                            <a href="#">
                              <img src="~src/assets/images/profile.png">
                            </a>
                          </div>
                          <div class="media-body">
                            <div class="media-heading">
                              <h4 class="title">Scott White</h4>
                              <h5 class="timeing">20 mins ago</h5>
                            </div>
                            <div class="media-content">
                              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin
                                commodo.</p>
                              <div class="attach">
                                <a href="#" class="thumbnail">
                                  <img src="http://placehold.it/100x100" class="img-responsive">
                                </a>
                                <a href="#" class="thumbnail">
                                  <img src="http://placehold.it/100x100" class="img-responsive">
                                </a>
                              </div>
                            </div>
                            <div class="media-action">
                              <button class="btn btn-link"><i class="fa fa-thumbs-o-up"></i> 2 Like</button>
                              <button class="btn btn-link"><i class="fa fa-comments-o"></i> 10 Comments</button>
                            </div>
                            <div class="media-comment">
                              <input type="text" class="form-control" placeholder="comment...">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </tab-item>
              <tab-item header="Timeline">
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nullaip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nullaip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla
              </tab-item>
              <tab-item header="Setting">
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              </tab-item>
            </tab-set>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ExampleProfilePage'
  }
</script>