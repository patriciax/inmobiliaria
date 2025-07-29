<script setup lang="ts">
import { ref, reactive, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import type { RegisterData } from '@/stores/auth'

// Router y store
const router = useRouter()
const authStore = useAuthStore()

// Datos del formulario
const dni = ref('')
const nombres = ref('')
const apellidos = ref('')
const telefono = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

// Estados de UI
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const successMessage = ref('')
const showVerification = ref(false)
const codigo = ref('')
// Errores de validación
const errors = reactive({
  dni: '',
  nombres: '',
  apellidos: '',
  telefono: '',
  email: '',
  password: '',
  confirmPassword: '',
  codigo: ''
})

onMounted(() => {
  // Inicializar el store de autenticación
  authStore.clear()

  // Verificar si el usuario ya está autenticado
})

// Limpiar error del store cuando el usuario empiece a escribir
watch([dni, nombres, apellidos, telefono, confirmPassword], () => {
  Object.keys(errors).forEach((key) => {
    errors[key as keyof typeof errors] = ''
  })
  successMessage.value = ''
})

watch(email, () => {
  errors.email = ''
  successMessage.value = ''
})

watch(password, () => {
  errors.password = ''
  successMessage.value = ''
})

watch(codigo, () => {
  errors.codigo = ''
  successMessage.value = ''
})


// Validaciones
const validateForm = (): boolean => {
  // Limpiar errores previos
  Object.keys(errors).forEach((key) => {
    errors[key as keyof typeof errors] = ''
  })

  let isValid = true

  // Validar DNI
  if (!dni.value.trim()) {
    errors.dni = 'El DNI/CC es requerido'
    isValid = false
  } else if (dni.value.trim().length < 6) {
    errors.dni = 'El DNI/CC debe tener al menos 6 caracteres'
    isValid = false
  }

  // Validar nombres
  if (!nombres.value.trim()) {
    errors.nombres = 'Los nombres son requeridos'
    isValid = false
  } else if (nombres.value.trim().length < 2) {
    errors.nombres = 'Los nombres deben tener al menos 2 caracteres'
    isValid = false
  }

  // Validar apellidos
  if (!apellidos.value.trim()) {
    errors.apellidos = 'Los apellidos son requeridos'
    isValid = false
  } else if (apellidos.value.trim().length < 2) {
    errors.apellidos = 'Los apellidos deben tener al menos 2 caracteres'
    isValid = false
  }

  // Validar teléfono
  if (!telefono.value.trim()) {
    errors.telefono = 'El teléfono es requerido'
    isValid = false
  } else if (!/^[\d\s\-\+\(\)]+$/.test(telefono.value)) {
    errors.telefono = 'El teléfono solo puede contener números y símbolos válidos'
    isValid = false
  }

  // Validar email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email.value.trim()) {
    errors.email = 'El email es requerido'
    isValid = false
  } else if (!emailRegex.test(email.value)) {
    errors.email = 'El email no tiene un formato válido'
    isValid = false
  }

  // Validar contraseña
  if (!password.value) {
    errors.password = 'La contraseña es requerida'
    isValid = false
  } else if (password.value.length < 8) {
    errors.password = 'La contraseña debe tener al menos 8 caracteres'
    isValid = false
  }

  // Validar confirmación de contraseña
  if (!confirmPassword.value) {
    errors.confirmPassword = 'Debes confirmar la contraseña'
    isValid = false
  } else if (password.value !== confirmPassword.value) {
    errors.confirmPassword = 'Las contraseñas no coinciden'
    isValid = false
  }

  return isValid
}

// Manejar registro
const handleRegister = async () => {
  if (!validateForm()) {
    return
  }

  const registerData: RegisterData = {
    email: email.value.trim(),
    password: password.value,
    name: nombres.value.trim(),
    last_name: apellidos.value.trim(),
    dni: dni.value.trim(),
    phone_number: telefono.value.trim(),
    role: 1 // Según tu ejemplo
  }

  try {
    await authStore.register(registerData)

    // Mostrar mensaje de éxito
    successMessage.value = '¡Registro exitoso! Redirigiendo...'
    showVerification.value = true
    // // Redirigir después de 2 segundos
    // setTimeout(() => {
    //   router.push('/dashboard') // o la ruta a la que quieras redirigir
    // }, 2000)
  } catch (error) {
    console.error('Error en el registro:', error)
    // El error ya está manejado en el store
  }
}

const handleLogin = async () => {
  console.log('Intentando iniciar sesión con:', email.value, password.value)
  if (!email.value || !password.value) {
    errors.email = 'El correo electrónico es requerido'
    errors.password = 'La contraseña es requerida'
    return
  }

  try {
    await authStore.login({ email: email.value.trim(), password: password.value })
    // router.push('/dashboard') // Redirigir al dashboard o a la ruta deseada
  } catch (error) {
    console.error('Error en el inicio de sesión:', error)
  }
}
// Limpiar formulario
const clearForm = () => {
  dni.value = ''
  nombres.value = ''
  apellidos.value = ''
  telefono.value = ''
  email.value = ''
  password.value = ''
  confirmPassword.value = ''
  successMessage.value = ''

  // Limpiar errores
  Object.keys(errors).forEach((key) => {
    errors[key as keyof typeof errors] = ''
  })
}

// Exponer funciones si es necesario
defineExpose({
  clearForm
})

</script>

<style scoped>
.register-form {
  max-width: 400px;
  margin: 0 auto;
}

.password-toggle {
  position: relative;
}

.password-toggle-btn {
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  cursor: pointer;
  border: none;
  background: transparent;
  padding: 0;
}

.password-toggle-indicator::before {
  content: '👁️';
  font-size: 18px;
}

.password-toggle-check:checked + .password-toggle-indicator::before {
  content: '🙈';
}

.invalid-feedback {
  display: block;
}

.spinner-border-sm {
  width: 1rem;
  height: 1rem;
}

/* Animación para mensajes */
.alert {
  animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
<template>
  <!-- Sign In Modal-->
  <div class="modal fade" id="signin-modal" tabindex="-1" aria-hidden="true">
    <div
      class="modal-dialog modal-lg modal-dialog-centered p-2 my-0 mx-auto"
      style="max-width: 950px"
    >
      <div class="modal-content">
        <div class="modal-body px-0 py-2 py-sm-0">
          <button
            class="btn-close position-absolute top-0 end-0 mt-3 me-3"
            type="button"
            data-bs-dismiss="modal"
            @click="clearForm"
          ></button>
          <div class="row mx-0 align-items-center">
            <div class="col-md-6 border-end-md p-4 p-sm-5">
              <h2 class="h3 mb-4 mb-sm-5">
                <span class="text"> Entra ya y haz parte del</span> cambio digital
                <span class="text">del </span> sector inmobiliario.
              </h2>
              <img
                class="d-block mx-auto"
                src="@/assets/img/loin.png"
                width="344"
                alt="Illustartion"
              />
              <div class="mt-4 mt-sm-5">
                ¿Aún no tienes una cuenta?
                <a
                  class="text-primary cursor-pointer"
                  data-bs-target="#signup-modal"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                  >Regístrate</a
                >
              </div>
            </div>
            <div class="col-md-6 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5">
              <a class="btn btn-outline-info w-100 mb-3" href="javascript:void(0);"
                ><i class="fi-google fs-lg me-1"></i>Iniciar sesión con Google</a
              >
              <div class="d-flex align-items-center py-3 mb-3">
                <hr class="w-100" />
                <div class="px-3">O</div>
                <hr class="w-100" />
              </div>
              <form class="needs-validation" novalidate @submit.prevent="handleLogin">
                <div class="mb-4">
                  <!-- <label class="form-label mb-2" for="signin-email">Correo electrónico</label> -->
                  <input
                    class="form-control"
                    type="email"
                    id="signin-email"
                    placeholder="Correo electrónico"
                    required
                    v-model="email"
                    :class="{ 'is-invalid': errors.email }"
                  />
                  <div v-if="errors.email" class="invalid-feedback">
                    {{ errors.email }}
                  </div>
                </div>
                <div class="mb-4">
                  <div class="d-flex align-items-center justify-content-between mb-2">
                    <!-- <label class="form-label mb-0" for="signin-password">Contraseña</label> -->
                    <!-- <a class="fs-sm" href="javascript:void(0);">Forgot password?</a> -->
                  </div>
                  <div class="password-toggle">
                    <input
                      class="form-control"
                      type="password"
                      id="signin-password"
                      placeholder="Contraseña"
                      autocomplete="off"
                      required
                      v-model="password"
                      :class="{ 'is-invalid': errors.password }"
                    />
                    <div v-if="errors.password" class="invalid-feedback">
                      {{ errors.password }}
                    </div>
                    <label v-else class="password-toggle-btn" aria-label="Show/hide password">
                      <input class="password-toggle-check" type="checkbox" /><span
                        class="password-toggle-indicator"
                      ></span>
                    </label>
                  </div>
                  <br>
                  <div v-if="authStore.error" class="alert alert-danger mb-4">
                    {{ authStore.error }}
                  </div>
                </div>
                <button class="btn btn-primary btn-lg w-100" type="submit">Ingresar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Sign Up Modal-->
  <div class="modal fade" id="signup-modal" tabindex="-1" aria-hidden="true">
    <div
      class="modal-dialog modal-lg modal-dialog-centered p-2 my-0 mx-auto"
      style="max-width: 950px"
    >
      <div class="modal-content">
        <div class="modal-body px-0 py-2 py-sm-0">
          <button
            class="btn-close position-absolute top-0 end-0 mt-3 me-3"
            type="button"
            data-bs-dismiss="modal"
          ></button>
          <div class="row mx-0 align-items-center">
            <div class="col-md-6 border-end-md p-4 p-sm-5">
              <h2 class="h3 mb-4 mb-sm-5">
                <span class="text">Únete al club</span><br />
                y empieza a conectar <br /><span class="text">con miles</span> <br />de
                oportunidades.
              </h2>

              <img
                class="d-block mx-auto"
                src="@/assets/img/regsiter.png"
                width="344"
                alt="Illustartion"
              />
              <div class="mt-sm-4 pt-md-3">
                ¿Ya tienes una cuenta?
                <a
                  class="text-primary"
                  data-bs-target="#signin-modal"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                  >Inicia sesión</a
                >
              </div>
            </div>
            <div class="col-md-6 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5">
              <template v-if="!showVerification">
                <a class="btn btn-outline-info w-100 mb-3" href="javascript:void(0);"
                  ><i class="fi-google fs-lg me-1"></i>Sign in with Google</a
                >
                <div class="d-flex align-items-center py-3 mb-3">
                  <hr class="w-100" />
                  <div class="px-3">O</div>
                  <hr class="w-100" />
                </div>
              </template>
              <div class="register-form">
                <form
                  v-if="!showVerification"
                  class="needs-validation"
                  novalidate
                  @submit.prevent="handleRegister"
                >
                  <!-- DNI/CC -->
                  <div class="mb-4">
                    <input
                      v-model="dni"
                      class="form-control"
                      type="text"
                      id="signup-dni"
                      required
                      placeholder="DNI/CC"
                      :class="{ 'is-invalid': errors.dni }"
                    />
                    <div v-if="errors.dni" class="invalid-feedback">
                      {{ errors.dni }}
                    </div>
                  </div>

                  <!-- Nombres -->
                  <div class="mb-4">
                    <input
                      v-model="nombres"
                      class="form-control"
                      type="text"
                      id="signup-nombres"
                      placeholder="Nombres"
                      required
                      :class="{ 'is-invalid': errors.nombres }"
                    />
                    <div v-if="errors.nombres" class="invalid-feedback">
                      {{ errors.nombres }}
                    </div>
                  </div>

                  <!-- Apellidos -->
                  <div class="mb-4">
                    <input
                      v-model="apellidos"
                      class="form-control"
                      type="text"
                      id="signup-apellidos"
                      placeholder="Apellidos"
                      required
                      :class="{ 'is-invalid': errors.apellidos }"
                    />
                    <div v-if="errors.apellidos" class="invalid-feedback">
                      {{ errors.apellidos }}
                    </div>
                  </div>

                  <!-- Teléfono -->
                  <div class="mb-4">
                    <input
                      v-model="telefono"
                      class="form-control"
                      type="text"
                      id="signup-telefono"
                      placeholder="Teléfono"
                      required
                      :class="{ 'is-invalid': errors.telefono }"
                    />
                    <div v-if="errors.telefono" class="invalid-feedback">
                      {{ errors.telefono }}
                    </div>
                  </div>

                  <!-- Email -->
                  <div class="mb-4">
                    <input
                      v-model="email"
                      class="form-control"
                      type="email"
                      id="signup-email"
                      placeholder="Correo Electrónico"
                      required
                      autocomplete="off"
                      :class="{ 'is-invalid': errors.email }"
                    />
                    <div v-if="errors.email" class="invalid-feedback">
                      {{ errors.email }}
                    </div>
                  </div>

                  <!-- Contraseña -->
                  <div class="mb-4">
                    <div class="password-toggle">
                      <input
                        v-model="password"
                        class="form-control"
                        :type="showPassword ? 'text' : 'password'"
                        id="signup-password"
                        minlength="8"
                        required
                        autocomplete="off"
                        placeholder="Contraseña"
                        :class="{ 'is-invalid': errors.password }"
                      />
                      <label class="password-toggle-btn" aria-label="Show/hide password">
                        <input
                          v-model="showPassword"
                          class="password-toggle-check"
                          type="checkbox"
                        />
                        <span class="password-toggle-indicator"></span>
                      </label>
                    </div>
                    <div v-if="errors.password" class="invalid-feedback">
                      {{ errors.password }}
                    </div>
                  </div>

                  <!-- Confirmar Contraseña -->
                  <div class="mb-4">
                    <div class="password-toggle">
                      <input
                        v-model="confirmPassword"
                        class="form-control"
                        :type="showConfirmPassword ? 'text' : 'password'"
                        id="signup-password-confirm"
                        minlength="8"
                        required
                        autocomplete="off"
                        placeholder="Confirmar Contraseña"
                        :class="{ 'is-invalid': errors.confirmPassword }"
                      />
                      <label class="password-toggle-btn" aria-label="Show/hide password">
                        <input
                          v-model="showConfirmPassword"
                          class="password-toggle-check"
                          type="checkbox"
                        />
                        <span class="password-toggle-indicator"></span>
                      </label>
                    </div>
                    <div v-if="errors.confirmPassword" class="invalid-feedback">
                      {{ errors.confirmPassword }}
                    </div>
                  </div>

                  <!-- Error general -->
                  <div v-if="authStore.error" class="alert alert-danger mb-4">
                    {{ authStore.error }}
                  </div>

                  <!-- Success message -->
                  <div v-if="successMessage" class="alert alert-success mb-4">
                    {{ successMessage }}
                  </div>

                  <!-- Botón de registro -->
                  <button
                    class="btn btn-primary btn-lg w-100"
                    type="submit"
                    :disabled="authStore.isLoading"
                  >
                    <span v-if="authStore.isLoading">
                      <span class="spinner-border spinner-border-sm me-2" role="status"></span>
                      Registrando...
                    </span>
                    <span v-else> Registrarme </span>
                  </button>
                </form>

                <section>
                  <div v-if="showVerification" class="mt-3">
                    <p class="">
                      Ingresar el c&oacute;digo de verificaci&oacute;n enviado a su correo
                      electr&oacute;nico.
                    </p>
                    <br />
                    <!-- Contraseña -->
                    <div class="mb-4">
                      <div class="password-toggle">
                        <input
                          v-model="codigo"
                          class="form-control"
                          id="signup-password"
                          minlength="8"
                          required
                          type="number"
                          autocomplete="off"
                          placeholder="Codigo de verificación"
                          :class="{ 'is-invalid': errors.codigo }"
                        />
                      </div>
                      <div v-if="errors.codigo" class="invalid-feedback">
                        {{ errors.codigo }}
                      </div>
                    </div>
                    <button
                      class="btn btn-primary btn-lg w-100"
                      type="submit"
                      @click="authStore.verifyCode(codigo)"
                      :disabled="authStore.isLoading"
                    >
                      <span v-if="authStore.isLoading">
                        <span class="spinner-border spinner-border-sm me-2" role="status"></span>
                        Verificando...
                      </span>
                      <span v-else>Verificar</span>
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.text {
  font-weight: 100;
}
</style>
