import Swal from 'sweetalert2';

// Custom themed toast configuration
export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3500,
  timerProgressBar: true,
  background: '#0A1931',
  color: '#FFFFFF',
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  }
});

// Popup success/error modal
export const popupModal = ({ title, text, icon = 'success' }) => {
  return Swal.fire({
    title,
    text,
    icon,
    confirmButtonColor: '#C5A059',
    background: '#0A1931',
    color: '#FFFFFF',
    customClass: {
      popup: 'rounded-3xl border border-[#DFBF7A]/40 shadow-2xl',
      confirmButton: 'px-7 py-3 rounded-full font-bold text-xs uppercase tracking-wider text-[#0A1931] !bg-[#DFBF7A]'
    }
  });
};

export default Swal;
