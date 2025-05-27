<template>
    <!-- Links-->
    <section class="container mb-5 pb-lg-5">
        <div class="row row-cols-md-3 row-cols-1 gy-3">
            <!-- Calculate property cost-->
            <div class="col">
                <div class="card card-hover h-100 border-0 bg-faded-warning position-relative">
                    <div class="card-body pb-2">
                        <h5 class="mb-2 pb-1">Calculate the cost of your property</h5>
                        <p class="mb-0">We can calculate your approximate rent.</p>
                    </div>
                    <div class="card-footer py-1 border-0"><a class="stretched-link btn btn-link mb-3 px-0 text-warning" data-bs-target="#cost-calculator" data-bs-toggle="modal">Calculate</a></div>
                </div>
            </div>
            <!-- Help center link-->
            <div class="col">
                <div class="card card-hover h-100 border-0 bg-faded-accent position-relative">
                    <div class="card-body pb-2">
                        <h5 class="mb-2 pb-1">Visit our Help Center</h5>
                        <p class="mb-0">Here you can find frequently asked questions.</p>
                    </div>
                    <div class="card-footer py-1 border-0">
                        <router-link class="stretched-link btn btn-link mb-3 px-0 text-accent" to="real-estate-help-center">Go to FAQs</router-link>
                    </div>
                </div>
            </div>
            <!-- How it works link-->
            <div class="col">
                <div class="card card-hover h-100 border-0 bg-faded-success position-relative">
                    <div class="card-body pb-2">
                        <h5 class="mb-2 pb-1">How it works</h5>
                        <p class="mb-0">Here is a step-by-step guide for renters.</p>
                    </div>
                    <div class="card-footer py-1 border-0">
                        <router-link class="stretched-link btn btn-link mb-3 px-0 text-success" to="/real-estate-about">Get started</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Property cost calculator modal-->
    <div class="modal fade" id="cost-calculator" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header d-block position-relative border-0 px-sm-5 px-4">
                    <h3 class="h4 modal-title mt-4 text-center">Explore your property’s value</h3>
                    <button class="btn-close position-absolute top-0 end-0 mt-3 me-3" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body px-sm-5 px-4">
                    <form class="needs-validation" novalidate>
                        <div class="mb-3">
                            <label class="form-label fw-bold mb-2" for="property-city">Property location</label>
                            <select class="form-control form-select" id="property-city" required>
                                <option value="" selected disabled hidden>Choose city</option>
                                <option value="Chicago">Chicago</option>
                                <option value="Dallas">Dallas</option>
                                <option value="Los Angeles">Los Angeles</option>
                                <option value="New York">New York</option>
                                <option value="San Diego">San Diego</option>
                            </select>
                            <div class="invalid-feedback">Please choose the city.</div>
                        </div>
                        <div class="mb-3">
                            <select class="form-control form-select" id="property-district" required>
                                <option value="" selected disabled hidden>Choose district</option>
                                <option value="Brooklyn">Brooklyn</option>
                                <option value="Manhattan">Manhattan</option>
                                <option value="Staten Island">Staten Island</option>
                                <option value="The Bronx">The Bronx</option>
                                <option value="Queens">Queens</option>
                            </select>
                            <div class="invalid-feedback">Please choose the district.</div>
                        </div>
                        <div class="pt-2 mb-3">
                            <label class="form-label fw-bold mb-2" for="property-address">Address</label>
                            <input class="form-control" type="text" id="property-address" placeholder="Enter your address" required />
                            <div class="invalid-feedback">Please enter your property's address.</div>
                        </div>
                        <div class="pt-2 mb-3">
                            <label class="form-label fw-bold mb-2">Number of rooms</label>
                            <div class="btn-group" role="group" aria-label="Choose number of rooms">
                                <input class="btn-check" type="radio" id="rooms-1" name="rooms" />
                                <label class="btn btn-outline-secondary" for="rooms-1">1</label>
                                <input class="btn-check" type="radio" id="rooms-2" name="rooms" />
                                <label class="btn btn-outline-secondary" for="rooms-2">2</label>
                                <input class="btn-check" type="radio" id="rooms-3" name="rooms" />
                                <label class="btn btn-outline-secondary" for="rooms-3">3</label>
                                <input class="btn-check" type="radio" id="rooms-4" name="rooms" />
                                <label class="btn btn-outline-secondary" for="rooms-4">4</label>
                                <input class="btn-check" type="radio" id="rooms-5" name="rooms" />
                                <label class="btn btn-outline-secondary" for="rooms-5">5+</label>
                            </div>
                        </div>
                        <div class="pt-2 mb-4">
                            <label class="form-label fw-bold mb-2" for="property-area">Total area, sq.m.</label>
                            <input class="form-control" type="text" id="property-area" placeholder="Enter your area" required />
                            <div class="invalid-feedback">Please enter your property's area.</div>
                        </div>
                        <button class="btn btn-primary d-block w-100 mb-4" type="submit">
                            <i class="fi-calculator me-2"></i>Calculate
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>