import styles from './InputSpinner.module.scss'

const InputSpinner = () => (
  <span className={styles.spinner} aria-hidden="true">
    <svg
      className={styles.spinnerIcon}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="42 84"
      />
    </svg>
  </span>
)

export default InputSpinner
