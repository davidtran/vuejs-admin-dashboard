<template>
  <div class="card">
    <div class="card-header">
      Step
    </div>
    <div class="card-body">
      <div class="step">
        <ul class="nav nav-tabs nav-justified" role="tablist">
          <li role="step">
            <a href="#step1" id="step1-tab" role="tab" data-toggle="tab" aria-controls="home" aria-expanded="true">
              <div class="icon fa fa-shopping-cart"></div>
              <div class="heading">
                <div class="title">Shipping</div>
                <div class="description">Enter your address</div>
              </div>
            </a>
          </li>
          <li role="step" class="">
            <a href="#step2" role="tab" id="step2-tab" data-toggle="tab" aria-controls="profile" aria-expanded="false">
              <div class="icon fa fa-credit-card"></div>
              <div class="heading">
                <div class="title">Payment</div>
                <div class="description">Billing Information.</div>
              </div>
            </a>
          </li>
          <li role="step" class="active">
            <a href="#step3" role="tab" id="step3-tab" data-toggle="tab" aria-controls="profile" aria-expanded="true">
              <div class="icon fa fa-check"></div>
              <div class="heading">
                <div class="title">Confirm Orders</div>
                <div class="description">Confirmation your purchases</div>
              </div>
            </a>
          </li>
          <li role="step">
            <a href="#step4" role="tab" id="step4-tab" data-toggle="tab" aria-controls="profile">
              <div class="icon fa fa-truck "></div>
              <div class="heading">
                <div class="title">Purchase Successfully</div>
                <div class="description">Wait for us shipping</div>
              </div>
            </a>
          </li>
        </ul>
        <!-- Tab panes -->
        <div class="tab-content">
          <div role="tabpanel" class="tab-pane" id="step1">
            <b>Step1</b> : Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
            ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel
          </div>
          <div role="tabpanel" class="tab-pane" id="step2">
            <b>Step2</b> : Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
            ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore
          </div>
          <div role="tabpanel" class="tab-pane active" id="step3">
            <b>Step3</b> : Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
            ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto
            odio dignissim qui blandit praesent luptatum
          </div>
          <div role="tabpanel" class="tab-pane" id="step4">
            <b>Step4</b> : Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
            ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequa
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'StepSection'
  }
</script>