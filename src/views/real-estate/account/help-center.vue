<script lang="ts" setup>
import { ref } from 'vue'
import Breadcrumb from '@/components/Breadcrumb.vue'

const breadcrumbData = ref([
  {
    title: 'Home',
    link: '/',
    subitems: [
      {
        title: 'Help Center'
      }
    ]
  }
])
</script>
<template>
  <!-- Page content-->
  <div class="container mt-5 mb-md-4 pt-5">
    <!-- Breadcrumb-->
    <Breadcrumb :data="breadcrumbData" />
  </div>

  <!-- Page header-->
  <section class="container mb-4 pb-lg-5">
    <h1 class="mx-auto mb-4 pb-2 text-center" style="max-width: 856px">Hi, how can we help?</h1>
    <!-- Search form-->
    <form class="form-group mb-4">
      <div class="input-group input-group-lg">
        <input class="form-control" type="text" placeholder="What are you looking for?" />
      </div>
      <button class="btn btn-primary btn-lg px-sm-4 px-3" type="submit">
        <i class="fi-search me-sm-2"></i><span class="d-sm-inline d-none">Search</span>
      </button>
    </form>
    <div class="d-flex flex-md-row flex-column align-items-md-center">
      <div class="pb-2 mb-2 me-2 flex-shrink-0 fw-bold">Popular sections:</div>
      <div class="text-nowrap overflow-auto pb-2">
        <div>
          <a class="btn btn-xs btn-outline-secondary rounded-pill fw-normal mb-2 me-2" href="javascript:void(0);">Notifications</a>
          <a class="btn btn-xs btn-outline-secondary rounded-pill fw-normal mb-2 me-2" href="javascript:void(0);">Getting started</a>
          <a class="btn btn-xs btn-outline-secondary rounded-pill fw-normal mb-2 me-2" href="javascript:void(0);">Transactions</a>
          <a class="btn btn-xs btn-outline-secondary rounded-pill fw-normal mb-2 me-2" href="javascript:void(0);">Account questions</a>
          <a class="btn btn-xs btn-outline-secondary rounded-pill fw-normal mb-2 me-2" href="javascript:void(0);">Mortgage</a>
          <a class="btn btn-xs btn-outline-secondary rounded-pill fw-normal mb-2 me-2" href="javascript:void(0);">Guides</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Page content-->
  <section class="container mb-md-5 mb-4 pb-lg-5">
    <div class="row">
      <!-- Sidebar offcanvas-->
      <aside class="col-xl-2 col-lg-3">
        <div class="offcanvas-lg offcanvas-start" id="help-sidebar">
          <div class="offcanvas-header shadow-sm mb-2">
            <h2 class="h5 mb-0">FAQ</h2>
            <button class="btn-close" type="button" data-bs-dismiss="offcanvas" data-bs-target="#help-sidebar"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="nav nav-tabs navbar-nav flex-column m-0 text-lg-center">
              <li class="nav-item px-0">
                <a class="nav-link active px-3" href="javascript:void(0);">Renters &amp; Rentals</a>
              </li>
              <li class="nav-item px-0">
                <a class="nav-link px-3" href="javascript:void(0);">Property Buyers</a>
              </li>
              <li class="nav-item px-0">
                <a class="nav-link px-3" href="javascript:void(0);">Property Owners</a>
              </li>
              <li class="nav-item px-0">
                <a class="nav-link px-3" href="javascript:void(0);">Mortgages</a>
              </li>
              <li class="nav-item px-0">
                <a class="nav-link px-3" href="javascript:void(0);">Mobile&nbsp;App&nbsp;Questions</a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      <!-- Content-->
      <div class="col-lg-9 offset-xl-1 col-lg-8">
        <h2 class="mb-md-4 mb-3 pb-md-2">Renters &amp; Rentals</h2>
        <div class="pb-md-2">
          <h3 class="h5">Are the rental listings on Finder filtered for scams?</h3>
          <p>
            Blandit adipiscing duis sit tellus rhoncus, amet, sit vitae gravida. Tincidunt placerat
            ultrices eu, senectus vitae accumsan massa in. Ultricies imperdiet duis feugiat lorem.
            Pretium turpis faucibus sit urna nisi lorem interdum. Diam semper et ac neque ac.
          </p>
        </div>
        <div class="pb-md-2">
          <h3 class="h5">How do rental listings get on Finder?</h3>
          <p>
            Amet posuere imperdiet placerat volutpat elit tellus lectus. Et sit massa volutpat id
            condimentum velit risus quam ut. Fames ut pulvinar ut ac sed elementum sed. Bibendum
            interdum ut sit ullamcorper arcu. Proin pharetra proin mi ultricies diam sit. Arcu
            faucibus ut adipiscing odio habitasse at ut amet maecenas. Suscipit eget mi felis eu mi
            scelerisque. Mattis condimentum ut eget eu, aliquam id blandit urna, mattis. Amet
            pharetra nibh tincidunt eu. Gravida pellentesque nisl mi in lectus. Sed sed diam
            facilisis et. Bibendum leo sit sagittis nunc, suspendisse venenatis. Aliquam eget morbi
            nibh nascetur diam urna, convallis.
          </p>
        </div>
        <div class="pb-md-2">
          <h3 class="h5">How can I find out more about my rights as a tenant?</h3>
          <p>
            Morbi egestas quam ultrices fames dapibus proin amet, placerat cum. Feugiat nibh nulla
            pellentesque viverra elementum nibh tortor orci. A vitae hac id accumsan. At lacus velit
            donec vivamus. Auctor pharetra, ipsum aliquam lacus morbi at feugiat nullam. In eu
            tellus elementum varius tristique. Varius pretium vestibulum feugiat dapibus tempor
            amet, ultricies. At urna diam viverra sed suspendisse. In at adipiscing nisl at ultrices
            curabitur tempor.
          </p>
        </div>
        <div class="pb-md-2">
          <h3 class="h5">How do I report a suspicious rental listing?</h3>
          <p>
            Mus sed odio eu maecenas augue ut sodales. Purus, massa consequat sagittis at id ornare
            ullamcorper. Risus nibh vivamus semper mattis. Purus et ultrices nec tellus enim arcu
            diam. Sit ut lorem leo posuere enim rutrum parturient. Eget ligula massa pulvinar
            quisque fusce maecenas et vulputate venenatis.
          </p>
        </div>
        <div class="pb-md-2">
          <h3 class="h5">Why can't I verify my identity?</h3>
          <p>
            Pulvinar ante sed neque, morbi in at. Justo, a etiam nulla non nunc, integer platea
            massa. Vestibulum integer ac nisi dignissim nec. Ut tellus erat orci habitant. Non, nunc
            egestas purus nisi, enim mi sit a imperdiet. Eget viverra elementum volutpat vulputate
            nunc metus est sed. Quis enim, eget malesuada habitasse et et tristique lectus id. Odio
            eget iaculis sollicitudin fames cursus sed massa. Non faucibus vitae donec vestibulum,
            morbi egestas a rutrum.
          </p>
        </div>
        <div class="pb-md-2">
          <h3 class="h5">Can I use your service to pay my landlord for utilities?</h3>
          <p>
            Eu amet nec in ut faucibus sed fringilla. In nibh cras imperdiet at. In quam pulvinar
            vel tempus ultricies diam turpis. Eu, integer ac morbi a, aenean et quis amet,
            pellentesque. Sem volutpat dui amet metus. Laoreet pulvinar vitae convallis a augue
            laoreet.
          </p>
        </div>
        <div class="pb-md-2">
          <h3 class="h5">Can I pay a few months’ rent in advance?</h3>
          <p>
            Pellentesque massa mauris elit morbi. Id aliquam in lacus convallis eget cras mauris
            felis lobortis. Tempus at at venenatis pulvinar lobortis. Semper et nisl, tincidunt
            enim, etiam pretium lacinia. Diam tellus arcu, sagittis lorem viverra eros tristique.
            Tellus sem et tellus nunc dictum. Pellentesque suspendisse pellentesque augue egestas mi
            nunc facilisis sapien aliquam. Ac semper facilisi posuere justo, te
          </p>
        </div>
        <div class="pb-md-2">
          <h3 class="h5">How do you protect my personal information?</h3>
          <p>
            Donec ipsum, diam, imperdiet id sociis cursus cras donec eget. Nunc, vitae lobortis
            ullamcorper diam consequat risus viverra odio a. Nibh scelerisque sed in at velit sit.
          </p>
        </div>
        <div class="pb-md-2">
          <h3 class="h5">
            What happens to my information after my application is accepted or declined?
          </h3>
          <p>
            Pretium vitae facilisis in faucibus gravida pulvinar ridiculus cum. Enim, a vitae tortor
            feugiat urna, iaculis. Ullamcorper tortor sollicitudin odio tempus elementum ut blandit
            commodo. Condimentum arcu ac nec, dolor ante sagittis nibh in tempus. Posuere
            ullamcorper cursus adipiscing etiam ullamcorper orci tristique.
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- Contact us-->
  <section class="container mb-5 pb-lg-5">
    <div class="row align-items-sm-center">
      <div class="col-sm-5">
        <img src="@/assets/img/real-estate/illustrations/support.svg" alt="Illustration" />
      </div>
      <div class="col-md-6 offset-md-1 col-sm-7 text-sm-start text-center">
        <h2 class="mb-4 pb-md-3">Can’t find what you are looking for?</h2>
        <router-link class="btn btn-lg btn-primary" to="/real-estate-contacts">Contact us now</router-link>
      </div>
    </div>
  </section>
</template>
