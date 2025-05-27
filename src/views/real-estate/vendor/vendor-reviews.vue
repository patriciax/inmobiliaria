<script lang="ts" setup>
import { ref } from 'vue'
import Breadcrumb from '@/components/Breadcrumb.vue';
import Sidebar from './common/sidebar.vue';

const breadcrumbData = ref([
    {
        title: 'Home',
        link: '/',
        subitems: [
            {
                title: 'Agents',
                link: '/real-estate-vendor-properties'
            },
            {
                title: 'Floyd Miles'
            }
        ]
    }
])
</script>
<template>
    <!-- Page container-->
    <div class="container mt-5 mb-md-4 py-5">
        <!-- Title + Breadcrumb-->
        <Breadcrumb :data="breadcrumbData" />

        <div class="row">
            <Sidebar />

            <!-- Content-->
            <div class="col-lg-9 col-md-8">
                <div class="d-flex align-items-center justify-content-between mb-4 pb-2">
                    <h1 class="h2 text-center text-sm-start mb-0">Reviews (45)</h1>
                    <router-link class="btn btn-link btn-sm px-0" to="/real-estate-vendor-properties"><i class="fi-arrow-left fs-xs mt-0 me-2"></i>Back to Offers</router-link>
                </div>
                <!-- Reviews statistics-->
                <div class="d-flex align-items-center mb-2">
                    <div class="text-nowrap fs-sm me-3">5<i class="fi-star text-muted ms-1 mt-n1"></i></div>
                    <div class="progress w-100">
                        <div class="progress-bar bg-warning" role="progressbar" style="width: 70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="flex-shrink-0 flex-grow-1 fs-sm text-end ps-2" style="width: 3rem;">70%</div>
                </div>
                <div class="d-flex align-items-center mb-2">
                    <div class="text-nowrap fs-sm me-3">4<i class="fi-star text-muted ms-1 mt-n1"></i></div>
                    <div class="progress w-100">
                        <div class="progress-bar bg-warning" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="flex-shrink-0 flex-grow-1 fs-sm text-end ps-2" style="width: 3rem;">15%</div>
                </div>
                <div class="d-flex align-items-center mb-2">
                    <div class="text-nowrap fs-sm me-3">3<i class="fi-star text-muted ms-1 mt-n1"></i></div>
                    <div class="progress w-100">
                        <div class="progress-bar bg-warning" role="progressbar" style="width: 0" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="flex-shrink-0 flex-grow-1 fs-sm text-end ps-2" style="width: 3rem;">0%</div>
                </div>
                <div class="d-flex align-items-center mb-2">
                    <div class="text-nowrap fs-sm me-3">2<i class="fi-star text-muted ms-1 mt-n1"></i></div>
                    <div class="progress w-100">
                        <div class="progress-bar bg-warning" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="flex-shrink-0 flex-grow-1 fs-sm text-end ps-2" style="width: 3rem;">10%</div>
                </div>
                <div class="d-flex align-items-center mb-2">
                    <div class="text-nowrap fs-sm me-3">1<i class="fi-star text-muted ms-1 mt-n1"></i></div>
                    <div class="progress w-100">
                        <div class="progress-bar bg-warning" role="progressbar" style="width: 5%" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="flex-shrink-0 flex-grow-1 fs-sm text-end ps-2" style="width: 3rem;">5%</div>
                </div>
                <!-- Sorting + add review button-->
                <div class="d-flex flex-sm-row flex-column align-items-sm-center align-items-stretch justify-content-between border-bottom py-4 mt-3 mb-4">
                    <div class="d-flex align-items-center me-sm-4 mb-sm-0 mb-3">
                        <label class="me-2 pe-1 text-nowrap" for="review-sorting"><i class="fi-arrows-sort text-muted mt-n1 me-2"></i>Sort by:</label>
                        <select class="form-select" id="review-sorting">
                            <option>Newest</option>
                            <option>Oldest</option>
                            <option>Popular</option>
                            <option>High rating</option>
                            <option>Low rating</option>
                        </select>
                    </div><a class="btn btn-outline-primary" data-bs-target="#modal-review" data-bs-toggle="modal"><i class="fi-edit me-1"></i>Add review</a>
                </div>
                <!-- Review-->
                <div class="mb-4 pb-4 border-bottom">
                    <div class="d-flex justify-content-between mb-3">
                        <div class="d-flex align-items-center pe-2"><img class="rounded-circle me-1" src="@/assets/img/avatars/06.jpg" width="48" alt="Avatar">
                            <div class="ps-2">
                                <h6 class="fs-base mb-0">Kristin Watson</h6>
                                <span class="star-rating">
                                    <i class="star-rating-icon fi-star-filled active"></i>
                                    <i class="star-rating-icon fi-star-filled active"></i>
                                    <i class="star-rating-icon fi-star-filled active"></i>
                                    <i class="star-rating-icon fi-star-filled active"></i>
                                    <i class="star-rating-icon fi-star-filled active"></i>
                                </span>
                            </div>
                        </div><span class="text-muted fs-sm">Jan 17, 2021</span>
                    </div>
                    <p>Elementum ut quam tincidunt egestas vitae elit, hendrerit. Ullamcorper nulla amet lobortis elit, nibh condimentum enim. Aliquam felis nisl tellus sodales lectus dictum tristique proin vitae. Odio fermentum viverra tortor quis.</p>
                    <div class="d-flex align-items-center">
                        <button class="btn-like" type="button"><i class="fi-like"></i><span>(3)</span></button>
                        <div class="border-end me-1">&nbsp;</div>
                        <button class="btn-dislike" type="button"><i class="fi-dislike"></i><span>(0)</span></button>
                    </div>
                </div>
                <!-- Review-->
                <div class="mb-4 pb-4 border-bottom">
                    <div class="d-flex justify-content-between mb-3">
                        <div class="d-flex align-items-center pe-2"><img class="rounded-circle me-1" src="@/assets/img/avatars/13.png" width="48" alt="Avatar">
                            <div class="ps-2">
                                <h6 class="fs-base mb-0">Darrell Steward</h6>
                                <span class="star-rating">
                                    <i class="star-rating-icon fi-star-filled active"></i>
                                    <i class="star-rating-icon fi-star-filled active"></i>
                                    <i class="star-rating-icon fi-star"></i>
                                    <i class="star-rating-icon fi-star"></i>
                                    <i class="star-rating-icon fi-star"></i>
                                </span>
                            </div>
                        </div><span class="text-muted fs-sm">Dec 1, 2020</span>
                    </div>
                    <p>Vel dictum nunc ut tristique. Egestas diam amet, ut proin hendrerit. Dui accumsan at phasellus tempus consequat dignissim.</p>
                    <div class="d-flex align-items-center">
                        <button class="btn-like" type="button"><i class="fi-like"></i><span>(0)</span></button>
                        <div class="border-end me-1">&nbsp;</div>
                        <button class="btn-dislike" type="button"><i class="fi-dislike"></i><span>(1)</span></button>
                    </div>
                </div>
                <!-- Review-->
                <div class="mb-4 pb-4 border-bottom">
                    <div class="d-flex justify-content-between mb-3">
                        <div class="d-flex align-items-center pe-2"><img class="rounded-circle me-1" src="@/assets/img/avatars/07.jpg" width="48" alt="Avatar">
                            <div class="ps-2">
                                <h6 class="fs-base mb-0">Cody Fisher</h6>
                                <span class="star-rating">
                                    <i class="star-rating-icon fi-star-filled active"></i>
                                    <i class="star-rating-icon fi-star-filled active"></i>
                                    <i class="star-rating-icon fi-star-filled active"></i>
                                    <i class="star-rating-icon fi-star-filled active"></i>
                                    <i class="star-rating-icon fi-star-filled active"></i>
                                </span>
                            </div>
                        </div><span class="text-muted fs-sm">Oct 28, 2020</span>
                    </div>
                    <p>Viverra nunc blandit sapien non imperdiet sit. Purus tempus elementum aliquam eu urna. A aenean duis non egestas at libero porttitor integer eget. Sed dictum lobortis laoreet gravida.</p>
                    <div class="d-flex align-items-center">
                        <button class="btn-like" type="button"><i class="fi-like"></i><span>(2)</span></button>
                        <div class="border-end me-1">&nbsp;</div>
                        <button class="btn-dislike" type="button"><i class="fi-dislike"></i><span>(1)</span></button>
                    </div>
                </div>
                <!-- Review-->
                <div class="mb-4 pb-4 border-bottom">
                    <div class="d-flex justify-content-between mb-3">
                        <div class="d-flex align-items-center pe-2"><img class="rounded-circle me-1" src="@/assets/img/avatars/04.jpg" width="48" alt="Avatar">
                            <div class="ps-2">
                                <h6 class="fs-base mb-0">Ralph Edwards</h6>
                                <span class="star-rating">
                                    <i class="star-rating-icon fi-star-filled active"></i>
                                    <i class="star-rating-icon fi-star-filled active"></i>
                                    <i class="star-rating-icon fi-star-filled active"></i>
                                    <i class="star-rating-icon fi-star-filled active"></i>
                                    <i class="star-rating-icon fi-star"></i>
                                </span>
                            </div>
                        </div><span class="text-muted fs-sm">Sep 14, 2020</span>
                    </div>
                    <p>Elementum nisl, egestas nam consectetur nisl, at pellentesque cras. Non sed ac vivamus dolor dignissim ut. Nisl sapien blandit pulvinar sagittis donec sociis ipsum arcu est. Tempus, rutrum morbi scelerisque tempor mi. Etiam urna, cras bibendum leo nec faucibus velit. Tempor lectus dignissim at auctor integer neque quam amet.</p>
                    <div class="d-flex align-items-center">
                        <button class="btn-like" type="button"><i class="fi-like"></i><span>(0)</span></button>
                        <div class="border-end me-1">&nbsp;</div>
                        <button class="btn-dislike" type="button"><i class="fi-dislike"></i><span>(0)</span></button>
                    </div>
                </div>
                <!-- Review-->
                <div class="mb-4 pb-4 border-bottom">
                    <div class="d-flex justify-content-between mb-3">
                        <div class="d-flex align-items-center pe-2"><img class="rounded-circle me-1" src="@/assets/img/avatars/13.png" width="48" alt="Avatar">
                            <div class="ps-2">
                                <h6 class="fs-base mb-0">Guy Hawkins</h6>
                                <span class="star-rating">
                                    <i class="star-rating-icon fi-star-filled active"></i>
                                    <i class="star-rating-icon fi-star-filled active"></i>
                                    <i class="star-rating-icon fi-star-filled active"></i>
                                    <i class="star-rating-icon fi-star-filled active"></i>
                                    <i class="star-rating-icon fi-star-filled active"></i>
                                </span>
                            </div>
                        </div><span class="text-muted fs-sm">Dec 1, 2020</span>
                    </div>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis morbi venenatis ut est.</p>
                    <div class="d-flex align-items-center">
                        <button class="btn-like" type="button"><i class="fi-like"></i><span>(1)</span></button>
                        <div class="border-end me-1">&nbsp;</div>
                        <button class="btn-dislike" type="button"><i class="fi-dislike"></i><span>(3)</span></button>
                    </div>
                </div>
                <!-- Pagination-->
                <nav class="mt-2" aria-label="Reviews pagination">
                    <ul class="pagination">
                        <li class="page-item d-sm-none"><span class="page-link page-link-static">1 / 5</span></li>
                        <li class="page-item active d-none d-sm-block" aria-current="page"><span class="page-link">1<span class="visually-hidden">(current)</span></span></li>
                        <li class="page-item d-none d-sm-block"><a class="page-link" href="javascript:void(0);">2</a></li>
                        <li class="page-item d-none d-sm-block"><a class="page-link" href="javascript:void(0);">3</a></li>
                        <li class="page-item d-none d-sm-block">...</li>
                        <li class="page-item d-none d-sm-block"><a class="page-link" href="javascript:void(0);">8</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);" aria-label="Next"><i class="fi-chevron-right"></i></a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>

    <!-- Review modal-->
    <div class="modal fade" id="modal-review" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header d-block position-relative border-0 pb-0 px-sm-5 px-4">
                    <h3 class="modal-title mt-4 text-center">Leave a review</h3>
                    <button class="btn-close position-absolute top-0 end-0 mt-3 me-3" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body px-sm-5 px-4">
                    <form class="needs-validation" novalidate>
                        <div class="mb-3">
                            <label class="form-label" for="review-name">Name <span class='text-danger'>*</span></label>
                            <input class="form-control" type="text" id="review-name" placeholder="Your name" required>
                            <div class="invalid-feedback">Please let us know your name.</div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="review-email">Email <span class='text-danger'>*</span></label>
                            <input class="form-control" type="email" id="review-email" placeholder="Your email address" required>
                            <div class="invalid-feedback">Please provide a valid email address.</div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="review-rating">Rating <span class='text-danger'>*</span></label>
                            <select class="form-select" id="review-rating" required>
                                <option value="" selected disabled>Choose rating</option>
                                <option value="5 stars">5 stars</option>
                                <option value="4 stars">4 stars</option>
                                <option value="3 stars">3 stars</option>
                                <option value="2 stars">2 stars</option>
                                <option value="1 star">1 star</option>
                            </select>
                            <div class="invalid-feedback">Please rate the property.</div>
                        </div>
                        <div class="mb-4">
                            <label class="form-label" for="review-text">Review <span class='text-danger'>*</span></label>
                            <textarea class="form-control" id="review-text" rows="5" placeholder="Your review message" required></textarea>
                            <div class="invalid-feedback">Please write your review.</div>
                        </div>
                        <button class="btn btn-primary d-block w-100 mb-4" type="submit">Submit a review</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>