<script lang="ts" setup>
import { ref } from 'vue';
import leftSidebar from './common/left-sidebar.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';

import vueFilePond from 'vue-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import image preview plugin styles
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'

// Import image preview and file type validation plugins
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

// Create component
const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview
);

const files = ref([]);

const breadcrumbData = ref([
    {
        title: 'Home',
        link: '/',
        subitems: [
            {
                title: 'Account',
                link: '/real-estate-account-info'
            },
            {
                title: 'Personal Info'
            }
        ]
    }
])
</script>
<template>
    <!-- Page content-->
    <div class="container pt-5 pb-lg-4 mt-5 mb-sm-2">
        <!-- Breadcrumb-->
        <Breadcrumb :data="breadcrumbData" />

        <!-- Page content-->
        <div class="row">
            <!-- Sidebar-->
            <leftSidebar activePage="info" />

            <!-- Content-->
            <div class="col-lg-8 col-md-7 mb-5">
                <h1 class="h2">Personal Info</h1>
                <div class="mb-2 pt-1">Your personal info is 50% completed</div>
                <div class="progress mb-4" style="height: .25rem;">
                    <div class="progress-bar bg-warning" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <label class="form-label pt-2" for="account-bio">Short bio</label>
                <div class="row pb-2">
                    <div class="col-lg-9 col-sm-8 mb-4">
                        <textarea class="form-control" id="account-bio" rows="6" placeholder="Write your bio here. It will be displayed on your public profile."></textarea>
                    </div>
                    <div class="col-lg-3 col-sm-4 mb-4">
                        <file-pond class="file-uploader bg-secondary py-4 pt-5" v-model="files" labelIdle='<i class="d-inline-block fi-camera-plus fs-2 text-muted mb-2"></i><br><span class="fw-bold">Change picture</span>' accepted-file-types="image/jpeg, image/png" />
                    </div>
                </div>
                <div class="border rounded-3 p-3 mb-4" id="personal-info">
                    <!-- Name-->
                    <div class="border-bottom pb-3 mb-3">
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="pe-2">
                                <label class="form-label fw-bold">Full name</label>
                                <div id="name-value">Annette Black</div>
                            </div>
                            <div data-bs-toggle="tooltip" title="Edit"><a class="nav-link py-0" data-bs-target="#name-collapse" data-bs-toggle="collapse"><i class="fi-edit"></i></a></div>
                        </div>
                        <div class="collapse" id="name-collapse" data-bs-parent="#personal-info">
                            <input class="form-control mt-3" type="text" data-bs-binded-element="#name-value" data-bs-unset-value="Not specified" value="Annette Black">
                        </div>
                    </div>
                    <!-- Email-->
                    <div class="border-bottom pb-3 mb-3">
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="pe-2">
                                <label class="form-label fw-bold">Email</label>
                                <div id="email-value">annette_black@email.com</div>
                            </div>
                            <div data-bs-toggle="tooltip" title="Edit"><a class="nav-link py-0" data-bs-target="#email-collapse" data-bs-toggle="collapse"><i class="fi-edit"></i></a></div>
                        </div>
                        <div class="collapse" id="email-collapse" data-bs-parent="#personal-info">
                            <input class="form-control mt-3" type="email" data-bs-binded-element="#email-value" data-bs-unset-value="Not specified" value="annette_black@email.com">
                        </div>
                    </div>
                    <!-- Phone number-->
                    <div class="border-bottom pb-3 mb-3">
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="pe-2">
                                <label class="form-label fw-bold">Phone number</label>
                                <div id="phone-value">(302) 555-0107</div>
                            </div>
                            <div data-bs-toggle="tooltip" title="Edit"><a class="nav-link py-0" data-bs-target="#phone-collapse" data-bs-toggle="collapse"><i class="fi-edit"></i></a></div>
                        </div>
                        <div class="collapse" id="phone-collapse" data-bs-parent="#personal-info">
                            <input class="form-control mt-3" type="text" data-bs-binded-element="#phone-value" data-bs-unset-value="Not specified" value="(302) 555-0107">
                        </div>
                    </div>
                    <!-- Company name-->
                    <div class="border-bottom pb-3 mb-3">
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="pe-2">
                                <label class="form-label fw-bold">Company name</label>
                                <div id="company-value">Not specified</div>
                            </div>
                            <div data-bs-toggle="tooltip" title="Edit"><a class="nav-link py-0" data-bs-target="#company-collapse" data-bs-toggle="collapse"><i class="fi-edit"></i></a></div>
                        </div>
                        <div class="collapse" id="company-collapse" data-bs-parent="#personal-info">
                            <input class="form-control mt-3" type="text" data-bs-binded-element="#company-value" data-bs-unset-value="Not specified" placeholder="Enter company name">
                        </div>
                    </div>
                    <!-- Address-->
                    <div>
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="pe-2">
                                <label class="form-label fw-bold">Address</label>
                                <div id="address-value">Not specified</div>
                            </div>
                            <div data-bs-toggle="tooltip" title="Edit"><a class="nav-link py-0" data-bs-target="#address-collapse" data-bs-toggle="collapse"><i class="fi-edit"></i></a></div>
                        </div>
                        <div class="collapse" id="address-collapse" data-bs-parent="#personal-info">
                            <input class="form-control mt-3" type="text" data-bs-binded-element="#address-value" data-bs-unset-value="Not specified" placeholder="Enter address">
                        </div>
                    </div>
                </div>
                <!-- Socials-->
                <div class="pt-2">
                    <label class="form-label fw-bold mb-3">Socials</label>
                </div>
                <div class="d-flex align-items-center mb-3">
                    <div class="btn btn-icon btn-light btn-xs shadow-sm rounded-circle pe-none flex-shrink-0 me-3"><i class="fi-facebook text-body"></i></div>
                    <input class="form-control" type="text" placeholder="Your Facebook account">
                </div>
                <div class="d-flex align-items-center mb-3">
                    <div class="btn btn-icon btn-light btn-xs shadow-sm rounded-circle pe-none flex-shrink-0 me-3"><i class="fi-linkedin text-body"></i></div>
                    <input class="form-control" type="text" placeholder="Your LinkedIn account">
                </div>
                <div class="d-flex align-items-center mb-3">
                    <div class="btn btn-icon btn-light btn-xs shadow-sm rounded-circle pe-none flex-shrink-0 me-3"><i class="fi-twitter text-body"></i></div>
                    <input class="form-control" type="text" placeholder="Your Twitter account">
                </div>
                <div class="collapse" id="showMoreSocials">
                    <div class="d-flex align-items-center mb-3">
                        <div class="btn btn-icon btn-light btn-xs shadow-sm rounded-circle pe-none flex-shrink-0 me-3"><i class="fi-instagram text-body"></i></div>
                        <input class="form-control" type="text" placeholder="Your Instagram account">
                    </div>
                    <div class="d-flex align-items-center mb-3">
                        <div class="btn btn-icon btn-light btn-xs shadow-sm rounded-circle pe-none flex-shrink-0 me-3"><i class="fi-pinterest text-body"></i></div>
                        <input class="form-control" type="text" placeholder="Your Pinterest account">
                    </div>
                </div>
                <a class="collapse-label collapsed d-inline-block fs-sm fw-bold text-decoration-none pt-2 pb-3" data-bs-target="#showMoreSocials" data-bs-toggle="collapse" data-bs-label-collapsed="Show more" data-bs-label-expanded="Show less" role="button" aria-expanded="false" aria-controls="showMoreSocials"><i class="fi-arrow-down me-2"></i></a>
                <div class="d-flex align-items-center justify-content-between border-top mt-4 pt-4 pb-1">
                    <button class="btn btn-primary px-3 px-sm-4" type="button">Save changes</button>
                    <button class="btn btn-link btn-sm px-0" type="button"><i class="fi-trash me-2"></i>Delete account</button>
                </div>
            </div>
        </div>
    </div>
</template>