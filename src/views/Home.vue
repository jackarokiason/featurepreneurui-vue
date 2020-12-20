<template>
    <div>
    <nav class="navbar navbar-white navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span> <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand animated fadein" href="#"
            ><img class="logo2" src="img/logo.png" alt="" title=""
          /></a>
        </div>
        <div id="navbar" class="collapse navbar-collapse pull-right">
          <ul class="nav navbar-nav">
            <li>
              <a href="https://tactlabs.gitbook.io/featurepreneur" target="_blank">Docs</a>
            </li>
            <li >
              <a href="employer-login.html">For Employers</a>
            </li>

            <li><a href="login.html">Log in</a></li>
            <li>
              <a class="btn btn-primary btn-sign" href="register.html"
                >Sign Up</a
              >
            </li>
          </ul>
        </div>
        <!--/.nav-collapse -->
      </div>
    </nav>
    <section class="banner">
      <div class="baner-left">
        <h2>Micro-prediction for everyone</h2>
        <p>
          Our ML Volunteers will help you on the Micro-prediction and Analytics.
        </p>
        <a href="features.html" class="btn btn-default banner_btn"
          >Featurepreneur Projects</a
        >
      </div>
      <div class="baner-right">
        <img
          src="img/banner.jpg"
          alt="Talent Accurate"
          title="Talent Accurate"
          class=""
        />
      </div>
    </section>
    <section class="modal-howitwork animated fadeIn">
      <div class="heading text-center">
        <h2>How it Works</h2>
        <div class="container howit">
          <div class="row block-sp">
            <span class="number_icon">01</span>
            <div class="col-md-6 one_img">
              <img
                src="img/howitowrk_icon1.png"
                alt="Sign Up"
                title="Sign Up"
              />
            </div>
            <div class="col-md-6">
              <div class="block one text-left">
                <h3>Sign Up</h3>
                <p>just sign up and add some awesome things about you.</p>
              </div>
            </div>
          </div>
          <div class="row block-sp">
            <span class="number_icon">02</span>
            <div class="col-md-6 col-md-push-6 two_img">
              <img
                src="img/howitowrk_icon2.png"
                alt="Pick a Feaure Bounty"
                title="Pick a Feaure Bounty"
              />
            </div>
            <div class="col-md-6 col-md-pull-6">
              <div class="block two text-right">
                <h3>Create a Feature</h3>
                <p>
                  Just create a couple of features to showcase your skils in ML / Data Analysis / Small App Making
                  
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div class="row block-sp">
            <span class="number_icon">03</span>
            <div class="col-md-6 three_img">
              <img
                src="img/howitowrk_icon3.png"
                alt="Show 'em a Demo"
                title="Show 'em a Demo"
              />
            </div>
            <div class="col-md-6">
              <div class="block one text-left">
                <h3>Showcase your work</h3>
                <ul>
                  <li>Show your Features to the world</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="row block-sp">
            <span class="number_icon">04</span>
            <div class="col-md-6 col-md-push-6 four_img">
              <img
                src="img/howitowrk_icon4.png"
                alt="Time for Offer or Learning"
                title="Time for Offer or Learning"
              />
            </div>
            <div class="col-md-6 col-md-pull-6">
              <div class="block two text-right">
                <h3>
                  Certificate or <br />
                  Get Hired
                </h3>
                <p>
                  If the employer is happy with your demo, talk about internship / volunteer / full time job
                </p>
                <p>
                  If not, get a Certificate and wait for the
                  better.
                </p>
              </div>
            </div>
          </div>

          <div class="row block-sp">
            <div class="heading text-center">
              <h2>
                <a href="students.html">Check more details</a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="modal-newsletter">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3">
            <div class="modal-body">
              <h2>Don't Miss Any News<br />Subscribe to Our Newsletter.</h2>
              <div id="message"></div>              
              <div class="input-group">
                <input
                  type="email"
                  id="email"
                  class="form-control"
                  placeholder="Enter your email"
                  required=""
                />
                <span class="input-group-btn">
                  <input
                    type="submit"
                    class="btn btn-primary"
                    value="Subscribe"
                    onclick="newsLetter()"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--
    <section class="modal-testimonial">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="testi-left">
              <h5>PERSONALIZED MATCHING</h5>
              <h3>Where one-of-a-kind meets The One.</h3>
              <p>
                We curate our network with a diverse set of opportunities across
                a variety of companies, matching you with only those that best
                meet your unique skills, interests, preferences, and priorities.
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="testi-right">
              <div
                class="carousel slide"
                data-ride="carousel"
                id="quote-carousel"
              >
                <!-- Bottom Carousel Indicators --><!--
                <ol class="carousel-indicators">
                  <li
                    data-target="#quote-carousel"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li data-target="#quote-carousel" data-slide-to="1"></li>
                  <li data-target="#quote-carousel" data-slide-to="2"></li>
                </ol>
                <!-- Carousel Slides / Quotes --><!--
                <div class="carousel-inner">
                  <!-- Quote 1 --><!--
                  <div class="item active">
                    <div class="row">
                      <div class="col-sm-12">
                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                        <p>
                          &ldquo;Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Maecenas sed diam eget risus varius
                          blandit sit amet non magna. Etiam porta sem malesuada
                          magna mollis euismod. Nulla vitae elit libero, a
                          pharetra augue. Donec id elit non mi porta gravida at
                          eget metus.&rdquo;
                        </p>
                        <small
                          ><strong>Vulputate M, Dolor</strong><br />Product
                          Manager</small
                        >
                      </div>
                    </div>
                  </div>
                  <!-- Quote 2 --><!--
                  <div class="item">
                    <div class="row">
                      <div class="col-sm-12">
                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                        <p>
                          &ldquo;Vivamus sagittis lacus vel augue laoreet rutrum
                          faucibus dolor auctor. Vivamus sagittis lacus vel
                          augue laoreet rutrum faucibus dolor auctor. Aenean
                          lacinia bibendum nulla sed consectetur. Nullam id
                          dolor id nibh ultricies vehicula ut id elitestibulum
                          at eros. Aenean eu leo quam.&rdquo;
                        </p>
                        <small
                          ><strong>Fringilla A, Vulputate Sit</strong
                          ><br />Product Manager</small
                        >
                      </div>
                    </div>
                  </div>
                  <!-- Quote 3 --><!--
                  <div class="item">
                    <div class="row">
                      <div class="col-sm-12">
                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                        <p>
                          &ldquo;Aenean lacinia bibendum nulla sed consectetur.
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Praesent commodo cursus magna, vel scelerisque
                          nisl consectetur et. Maecenas faucibus mollis
                          interdum. Cras mattis consectetur purus sit amet
                          fermentum.&rdquo;
                        </p>
                        <small
                          ><strong>Aenean A, Justo Cras</strong><br />Product
                          Manager</small
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    -->

    <section class="partner-section">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="heading text-center">
              <h2>Clients &amp; Partners</h2>
            </div>

            <div class="owl-carousel row owl-theme">
              <div class="item col-sm-3">
                <img
                  src="https://s3.amazonaws.com/tode/tact_images/founder-institute.jpg"
                  alt="apira"
                  title="apira"
                />
              </div>
              <div class="item col-sm-3">
                <img
                  src="https://s3.amazonaws.com/tode/tact_images/PregBuddy.jpg"
                  alt="PregBuddy"
                  title="PregBuddy"
                />
              </div>
              <div class="item col-sm-3">
                <img
                  src="https://s3.amazonaws.com/tode/tact_images/vue.jpg"
                  alt="vue"
                  title="vue"
                />
              </div>
              <div class="item col-sm-3">
                <img
                  src="https://s3.amazonaws.com/tode/tact_images/cerdit.jpg"
                  alt="cerdit"
                  title="cerdit"
                />
              </div>
            </div>

            <br />
            <br />

            <div class="owl-carousel row owl-theme">
              <div class="item col-sm-3">
                <img
                  src="https://s3.amazonaws.com/tode/tact_images/iboost.jpg"
                  alt="iBoost"
                  title="iBoost"
                />
              </div>
              <div class="item col-sm-3">
                <img
                  src="https://s3.amazonaws.com/tode/tact_images/toronto-city.jpg"
                  alt="Toronto City"
                  title="Toronto City"
                />
              </div>
              <div class="item col-sm-3">
                <img
                  src="https://s3.amazonaws.com/tode/tact_images/tce.jpg"
                  alt="TCE"
                  title="TCE"
                />
              </div>
              <div class="item col-sm-3">
                <img
                  src="https://s3.amazonaws.com/tode/tact_images/apira.jpg"
                  alt="Apiria"
                  title="Apiria"
                />
              </div>
            </div>

            <br />
            <br />

            <div class="owl-carousel row owl-theme">
              <div class="item col-sm-3">
                <img
                  src="https://s3.amazonaws.com/tode/tact_images/1-12.jpg"
                  alt="1-12"
                  title="1-12"
                />
              </div>
              <div class="item col-sm-3">
                <img
                  src="https://s3.amazonaws.com/tode/tact_images/pupaclic.jpg"
                  alt="vue"
                  title="vue"
                />
              </div>
              <div class="item col-sm-3">
                <img
                  src="https://s3.amazonaws.com/tode/tact_images/spaceishare.jpg"
                  alt="SpaceIShare"
                  title="SpaceIShare"
                />
              </div>
              <div class="item col-sm-3">
                <img
                  src="https://s3.amazonaws.com/tode/tact_images/webclues.jpg"
                  alt="WebClues"
                  title="WebClues"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="modal-newsletter">
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-md-offset-1">
            <div class="modal-body">
              <h2>Tired of resumes? <br/> Build a feature and impress your employer</h2>
              <div id="message"></div>              
              
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="partner-section"> 
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="mb-5 heading text-center">
            <h1 class="alumni">Our Alumni Landed In</h1>
          </div>
          
          <div class="mt-5 owl-carousel row owl-theme">
            <div class="item col-lg-4">
              <img
                src="img/amazon.png"
                alt="apira"
                title="amazon"
                />
            </div>
            
            <div class="item col-lg-4">
              <img
                src="img/royalbank.png"
                alt="PregBuddy"
                title="royalbank"
                />
            </div>

            <div class="item col-lg-4">
              <img
                src="img/BNP.jpeg"
                alt=""
                title="BNP parivas"
              />
            </div>


          </div>

          <br />
          <br />

          <div class="mt-5 owl-carousel row owl-theme just text-center">
            
            <div class="item col-lg-6">
              <img
                src="img/zilker.png"
                alt=""
                title="zilker"
                class="mx-auto d-block"
              />
            </div>

            <div class="item col-lg-6">
              <img
                src="img/isdc.png"
                alt=""
                title="isdc"
                class="mx-auto d-block"
              />
            </div>

          </div>

          <br />
          <br />
          
        </div>
        </section>
        <div class="mb-5 col-12"></div>


    <footer class="footer inner animated fadeIn">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center copy">
            <p>Copyright 2020-2021 Featurepreneur, Inc. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>

    <!-- <footer class="footer animated fadeIn">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <h3>Related Links</h3>
            <ul>
              <li><a href="#">Terms of Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div class="col-md-2">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
          <div class="col-md-5">
            <h3>Latest Blogs</h3>
            <ul>
              <li>
                <a href="#"
                  >Hire the Right Talent That Strengthens Your Organization</a
                >
              </li>
              <li><a href="#">Github magic</a></li>
              <li>
                <a href="#">Why collective Intelligence is important in IT?</a>
              </li>
              <li><a href="#">Show off your skills in a different way!</a></li>
              <li><a href="#">How to solve startup hiring problem?</a></li>
            </ul>
          </div>
          <div class="col-md-2">
            <h3>Community</h3>
            <ul>
              <li>
                <a href="#"
                  ><i class="fa fa-facebook-official" aria-hidden="true"></i>
                  Facebook</a
                >
              </li>
              <li>
                <a href="#"
                  ><i class="fa fa-twitter" aria-hidden="true"></i>Twitter</a
                >
              </li>
              <li>
                <a href="#"
                  ><i class="fa fa-linkedin" aria-hidden="true"></i>LinkedIn</a
                >
              </li>
              <li>
                <a href="#"
                  ><i class="fa fa-youtube" aria-hidden="true"></i>YouTube</a
                >
              </li>
              <li>
                <a href="#"
                  ><i class="fa fa-google-plus" aria-hidden="true"></i>Google
                  Plus</a
                >
              </li>
            </ul>
          </div>
          <div class="col-sm-12 text-center copy">
            <p>Copyright 2020-2021 Featurepreneur, Inc. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

      .item {
        float: left;
      }

      .item img {
        max-width: 100%;
        height: 100px;
        border: #f5f5f5 1px solid;
      }

      .message{
        padding: 15px 5px;
        background-color: #ffffff7e;
        border: 2px solid white;
        border-radius: 5px;
      }

      .logo2{
        width:40%;
        margin-top: -15px;
      }

      .alumni{
        margin-top: 5px;
        margin-bottom: 85px;
      }

</style>