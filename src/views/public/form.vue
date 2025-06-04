<template>
       <form class="needs-validation" novalidate>
              <div class="mb-3">
                <input class="form-control" type="text" placeholder="Your name*" required />
                <div class="invalid-feedback">Please enter your name!</div>
              </div>
              <div class="mb-3">
                <input class="form-control" type="email" placeholder="Email*" required />
                <div class="invalid-feedback">Please provide valid email address!</div>
              </div>
              <input class="form-control mb-3" type="tel" placeholder="Phone" />
              <div class="input-group mb-3">
                <input
                  class="form-control date-picker rounded pe-5"
                  type="text"
                  placeholder="Choose date"
                  data-datepicker-options='{"altInput": true, "altFormat": "F j, Y", "dateFormat": "Y-m-d"}'
                /><i class="fi-calendar position-absolute top-50 end-0 translate-middle-y me-3"></i>
              </div>
              <textarea
                class="form-control mb-3"
                rows="3"
                placeholder="Message"
                style="resize: none"
              ></textarea>
        
              <button class="btn btn-lg btn-primary d-block w-100" type="submit">
                Enviar mensaje
              </button>
            </form>
</template>