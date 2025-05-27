<template>
    <!-- Sidebar (Agent's info)-->
    <aside class="col-lg-3 col-md-4 mb-5">
        <div class="pe-lg-3">
            <img class="d-block rounded-circle mx-auto mx-md-0 mb-3" src="@/assets/img/avatars/31.jpg" width="120" alt="Floyd Miles" />
            <h2 class="h4 text-center text-md-start mb-1">Floyd Miles</h2>
            <p class="text-center text-md-start mb-2 pb-1">Imperial Property Group Agent</p>
            <div class="d-flex justify-content-center justify-content-md-start border-bottom pb-4 mb-4">
                <span class="star-rating">
                    <i class="star-rating-icon fi-star-filled active"></i>
                    <i class="star-rating-icon fi-star-filled active"></i>
                    <i class="star-rating-icon fi-star-filled active"></i>
                    <i class="star-rating-icon fi-star-filled active"></i>
                    <i class="star-rating-icon fi-star-filled active"></i>
                </span>
                <router-link class="ms-2" to="/real-estate-vendor-reviews">45 reviews</router-link>
            </div>
            <div class="border-bottom pb-4 mb-4">
                <p class="fs-sm mb-0">
                    Hello! I will select the best accommodation for you. Amet libero morbi venenatis ut est.
                    Iaculis leo ultricies nunc id ante adipiscing. Vel metus odio at faucibus ac. Neque id
                    placerat et id ut acultricies commodo.
                </p>
                <div class="collapse" id="seeMore">
                    <p class="fs-sm mb-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
                    </p>
                </div>
                <div class="text-center text-md-start">
                    <a class="collapse-label collapsed fs-sm" data-bs-target="#seeMore" data-bs-toggle="collapse" data-bs-label-collapsed="Show more" data-bs-label-expanded="Show less" role="button" aria-expanded="false" aria-controls="seeMore"></a>
                </div>
            </div>
            <ul class="d-table list-unstyled mx-auto mx-md-0 mb-3 mb-md-4">
                <li class="mb-2">
                    <a class="nav-link fw-normal p-0" href="tel:3025550107"><i class="fi-phone text-primary mt-n1 me-2 align-middle"></i>(302) 555-0107</a>
                </li>
                <li>
                    <a class="nav-link fw-normal p-0" href="mailto:floyd_miles@email.com"><i class="fi-mail text-primary mt-n1 me-2 align-middle"></i>floyd_miles@email.com</a>
                </li>
            </ul>
            <div class="text-center text-md-start">
                <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm me-2" href="javascript:void(0);">
                    <i class="fi-facebook"></i>
                </a>
                <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm" href="javascript:void(0);">
                    <i class="fi-linkedin"></i>
                </a>
            </div>
            <div class="text-center text-md-start pt-md-2 mt-4">
                <a class="btn btn-primary" data-bs-target="#message-modal" data-bs-toggle="modal"><i class="fi-chat-left fs-sm me-2"></i>Direct message</a>
            </div>
        </div>
    </aside>

    <!-- Message modal-->
    <div class="modal fade" id="message-modal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="fs-base modal-title">Message to Floyd Miles</h3>
                    <button class="btn-close ms-0" type="button" data-bs-dismiss="modal"></button>
                </div>
                <form class="modal-body needs-validation" novalidate>
                    <div class="mb-4">
                        <textarea class="form-control" rows="6" placeholder="Type your message here" required></textarea>
                        <div class="invalid-feedback">Please type your message before sending.</div>
                    </div>
                    <button class="btn btn-primary mb-2" type="submit"><i class="fi-send me-2"></i>Send message</button>
                </form>
            </div>
        </div>
    </div>
</template>
