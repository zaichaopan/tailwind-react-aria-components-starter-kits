export {
  Cog6ToothIcon,
  Cog8ToothIcon,
  VideoCameraIcon,
  MicrophoneIcon,
  ChatBubbleLeftRightIcon,
  UserIcon,
  CreditCardIcon,
  BellAlertIcon,
  MusicalNoteIcon
} from '@heroicons/react/20/solid';

export function Plus(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
}

export function Minus(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
    </svg>
  );
}

export function Calendar(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
      />
    </svg>
  );
}

export function Mail(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
  );
}

export function Verified(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
      />
    </svg>
  );
}

export function Star(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
      />
    </svg>
  );
}

export function Left(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Right(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm6 4.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Justified(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Canada(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg viewBox="0 0 16 12" fill="none" {...props}>
      <g clipPath="url(#clip0_270_55097)">
        <path fill="#fff" d="M0 0H16V12H0z"></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 0h8.5v12H4V0z"
          fill="#F7FCFF"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.164 4.201L7.987 3 8 10h-.343l.21-1.732s-2.305.423-2.115.21c.191-.214.3-.606.3-.606L4 6.474s.324-.004.587-.164c.264-.16-.263-1.109-.263-1.109l1.036.154.392-.435.782.836h.352l-.352-1.914.63.36zM8 10V3l.836 1.201.63-.359-.352 1.914h.352l.782-.836.392.435 1.036-.154s-.527.949-.263 1.109c.263.16.587.164.587.164L9.947 7.872s.11.392.3.606c.191.213-2.115-.21-2.115-.21L8.342 10H8zM12 0h4v12h-4V0zM0 0h4v12H0V0z"
          fill="#E31D1C"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_270_55097">
          <path fill="#fff" d="M0 0H16V12H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export function US(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg viewBox="0 0 16 12" fill="none" {...props}>
      <g clipPath="url(#clip0_270_55071)">
        <path fill="#fff" d="M0 0H16V12H0z"></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h16v12H0V0z"
          fill="#E31D1C"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 1v1h16V1H0zm0 2v1h16V3H0zm0 3V5h16v1H0zm0 1v1h16V7H0zm0 3V9h16v1H0zm0 2v-1h16v1H0z"
          fill="#F7FCFF"
        ></path>
        <path fill="#2E42A5" d="M0 0H9V7H0z"></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.04 2.174l.53-.37.411.297h-.233l.471.416-.159.584h-.249l-.242-.536-.206.536H.748l.471.416-.179.657.53-.37.411.297h-.233l.471.416-.159.584h-.249l-.242-.536-.206.536H.748l.471.416-.179.657.53-.37.513.37-.16-.657.412-.416h-.19l.425-.296.411.296h-.233l.471.416-.179.657.53-.37.513.37-.16-.657.412-.416h-.19l.425-.296.411.296h-.233l.471.416-.179.657.53-.37.513.37-.16-.657.412-.416h-.19l.425-.296.411.296h-.233l.471.416-.179.657.53-.37.513.37-.16-.657.412-.416h-.524l-.242-.536-.206.536h-.298l-.142-.584.412-.416h-.19l.425-.296.513.369-.16-.657.412-.416h-.524l-.242-.536-.206.536h-.298l-.142-.584.412-.416h-.19l.425-.296.513.369-.16-.657.412-.416h-.524L7.569.565l-.206.536h-.615l.471.416-.159.584h-.249l-.242-.536-.206.536h-.298l-.142-.584.412-.416h-.524L5.569.565l-.206.536h-.615l.471.416-.159.584h-.249l-.242-.536-.206.536h-.298l-.142-.584.412-.416h-.524L3.569.565l-.206.536h-.615l.471.416-.159.584h-.249l-.242-.536-.206.536h-.298l-.142-.584.412-.416h-.524L1.569.565l-.206.536H.748l.471.416-.179.657zM7.06 4.1l.159-.584-.47-.416h.232l-.411-.296-.425.296h.19l-.412.416.142.584h.298l.206-.536.242.536h.249zm-1.079 0l-.411-.296-.425.296h.19l-.412.416.142.584h.298l.206-.536.242.536h.249l.159-.584-.47-.416h.232zm-1.762.416L4.06 5.1h-.249l-.242-.536-.206.536h-.298l-.142-.584.412-.416h-.19l.425-.296.411.296h-.233l.471.416zm.144-.416h-.298l-.142-.584.412-.416h-.19l.425-.296.411.296h-.233l.471.416-.159.584h-.249l-.242-.536-.206.536zm-1.303 0l.159-.584-.47-.416h.232l-.411-.296-.425.296h.19l-.412.416.142.584h.298l.206-.536.242.536h.249zm3.159-1.584L6.06 3.1h-.249l-.242-.536-.206.536h-.298l-.142-.584.412-.416h-.19l.425-.296.411.296h-.233l.471.416zM3.981 2.1l-.411-.296-.425.296h.19l-.412.416.142.584h.298l.206-.536.242.536h.249l.159-.584-.47-.416h.232z"
          fill="#F7FCFF"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_270_55071">
          <path fill="#fff" d="M0 0H16V12H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export function Mexico(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg viewBox="0 0 16 12" fill="none" {...props}>
      <g clipPath="url(#clip0_270_55118)">
        <path fill="#fff" d="M0 0H16V12H0z"></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 0h5v12h-5V0z"
          fill="#D9071E"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h6v12H0V0z"
          fill="#006923"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 0h6v12H5V0z"
          fill="#fff"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.192 3.957s-.343.266-.279.55c.064.284.74 0 .66-.275-.083-.275-.38-.275-.38-.275z"
          fill="#FCCA3D"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.668 4.634c-.257 0-.364-.214-.311-.442.028-.121.102-.276.222-.476l.43.257a2.861 2.861 0 00-.11.198.96.96 0 01.25.113c.234.154.32.428.07.631-.05.04-.128.173-.171.302.12.007.204.025.283.071.221.13.2.37.032.553-.12.13-.278.237-.429.29-.25.091-.516.057-.516-.263v-.002c0-.013-.002-.036.11-.038h.022-.022c-.19-.003-.231-.104-.255-.283a1.853 1.853 0 01-.012-.182l-.002-.06-.002-.06-.001-.013c-.004-.058-.007-.097.123-.097h-.29v-.5h.29c.164 0 .255.055.307.17.03-.052.06-.101.094-.145a.386.386 0 00-.112-.024zm.318.878l.008-.008-.002.004-.006.004zm-.218.149zm0-.189v.008-.015.007z"
          fill="#A8AC71"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.633 6.201s.463-1.37-.272-2.08c-.736-.71-1.585-.662-1.585-.662s-.245.182 0 .32c.245.14.142.272.142.272s-.41-.416-.682-.173c-.272.243.254.206.199.39-.056.182-.292.995.053 1.405.344.41-.326.321-.19.321.137 0 .62.096.62 0 0-.095.168.371.312.371s.255-.164.255-.164.201.164.324.164.552-.107.552-.107l-.81-.682s.049-.301-.066-.366.92.577 1.002.784c.08.207.146.207.146.207z"
          fill="#8F4620"
        ></path>
        <path
          d="M5.533 5.863s.075-.239.156-.256c.07-.014.216.115.216.115.26 1.445.889 2.01 1.933 2.01 1.055 0 1.695-.43 2.069-1.762 0 0 .198-.203.268-.18.077.024.172.292.172.292-.095 1.559-1.22 2.482-2.492 2.482-1.284 0-2.333-1.035-2.322-2.7z"
          fill="#9FAB2F"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.667 6.828s1.502.319 2.095.319c.593 0-.52.484-.954.484-.435 0-1.14-.803-1.14-.803z"
          fill="#2FC2DC"
        ></path>
        <rect
          x="7.33337"
          y="7.05"
          width="1"
          height="0.535714"
          rx="0.0833333"
          fill="#F9AA51"
        ></rect>
        <path
          d="M6.088 6.068l.41-.287c.532.76 1.328 1.009 2.443.748l.114.487c-1.303.305-2.31-.01-2.967-.948z"
          fill="#259485"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.296 6.175s-.607.32-.405.32c.202 0 .994.16.84 0-.154-.16-.435-.32-.435-.32zM7.578 5.794s-.115-.333-.355-.333-.172.273-.288.273c-.115 0 .108.193.207.193.1 0 .436-.133.436-.133z"
          fill="#FCCA3D"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_270_55118">
          <path fill="#fff" d="M0 0H16V12H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export function CheckCircle(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function SolidStar(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Moon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
    >
      <path d="M14.438 10.148c.19-.425-.321-.787-.748-.601A5.5 5.5 0 0 1 6.453 2.31c.186-.427-.176-.938-.6-.748a6.501 6.501 0 1 0 8.585 8.586Z" />
    </svg>
  );
}

export function ArrowRightStartOnRectangle(
  props: JSX.IntrinsicElements['svg'],
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M2 4.75A2.75 2.75 0 0 1 4.75 2h3a2.75 2.75 0 0 1 2.75 2.75v.5a.75.75 0 0 1-1.5 0v-.5c0-.69-.56-1.25-1.25-1.25h-3c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h3c.69 0 1.25-.56 1.25-1.25v-.5a.75.75 0 0 1 1.5 0v.5A2.75 2.75 0 0 1 7.75 14h-3A2.75 2.75 0 0 1 2 11.25v-6.5Zm9.47.47a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 1 1-1.06-1.06l.97-.97H5.25a.75.75 0 0 1 0-1.5h7.19l-.97-.97a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function InformationCircle(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM9 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.75 8a.75.75 0 0 0 0 1.5h.75v1.75a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8.25 8h-1.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function BelAlert(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
    >
      <path d="M3.6 1.7A.75.75 0 1 0 2.4.799a6.978 6.978 0 0 0-1.123 2.247.75.75 0 1 0 1.44.418c.187-.644.489-1.24.883-1.764ZM13.6.799a.75.75 0 1 0-1.2.9 5.48 5.48 0 0 1 .883 1.765.75.75 0 1 0 1.44-.418A6.978 6.978 0 0 0 13.6.799Z" />
      <path
        fillRule="evenodd"
        d="M8 1a4 4 0 0 1 4 4v2.379c0 .398.158.779.44 1.06l1.267 1.268a1 1 0 0 1 .293.707V11a1 1 0 0 1-1 1h-2a3 3 0 1 1-6 0H3a1 1 0 0 1-1-1v-.586a1 1 0 0 1 .293-.707L3.56 8.44A1.5 1.5 0 0 0 4 7.38V5a4 4 0 0 1 4-4Zm0 12.5A1.5 1.5 0 0 1 6.5 12h3A1.5 1.5 0 0 1 8 13.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Cog8Tooth(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M6.955 1.45A.5.5 0 0 1 7.452 1h1.096a.5.5 0 0 1 .497.45l.17 1.699c.484.12.94.312 1.356.562l1.321-1.081a.5.5 0 0 1 .67.033l.774.775a.5.5 0 0 1 .034.67l-1.08 1.32c.25.417.44.873.561 1.357l1.699.17a.5.5 0 0 1 .45.497v1.096a.5.5 0 0 1-.45.497l-1.699.17c-.12.484-.312.94-.562 1.356l1.082 1.322a.5.5 0 0 1-.034.67l-.774.774a.5.5 0 0 1-.67.033l-1.322-1.08c-.416.25-.872.44-1.356.561l-.17 1.699a.5.5 0 0 1-.497.45H7.452a.5.5 0 0 1-.497-.45l-.17-1.699a4.973 4.973 0 0 1-1.356-.562L4.108 13.37a.5.5 0 0 1-.67-.033l-.774-.775a.5.5 0 0 1-.034-.67l1.08-1.32a4.971 4.971 0 0 1-.561-1.357l-1.699-.17A.5.5 0 0 1 1 8.548V7.452a.5.5 0 0 1 .45-.497l1.699-.17c.12-.484.312-.94.562-1.356L2.629 4.107a.5.5 0 0 1 .034-.67l.774-.774a.5.5 0 0 1 .67-.033L5.43 3.71a4.97 4.97 0 0 1 1.356-.561l.17-1.699ZM6 8c0 .538.212 1.026.558 1.385l.057.057a2 2 0 0 0 2.828-2.828l-.058-.056A2 2 0 0 0 6 8Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function User(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
    >
      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
    </svg>
  );
}

export function ChevronsUpDown(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M5.22 10.22a.75.75 0 0 1 1.06 0L8 11.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1 0-1.06ZM10.78 5.78a.75.75 0 0 1-1.06 0L8 4.06 6.28 5.78a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function EllipsisHorizontal(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
    >
      <path d="M3 10a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM8.5 10a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM15.5 8.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
    </svg>
  );
}

export function EllipsisVertical(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
    >
      <path d="M8 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM8 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM9.5 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
    </svg>
  );
}

export function CreditCard(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
    >
      <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5V5h14v-.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
      <path
        fillRule="evenodd"
        d="M15 7H1v4.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V7ZM3 10.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Zm3.75-.75a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function ArchiveBox(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
    >
      <path d="M2 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3Z" />
      <path
        fillRule="evenodd"
        d="M13 6H3v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6ZM5.72 7.47a.75.75 0 0 1 1.06 0L8 8.69l1.22-1.22a.75.75 0 1 1 1.06 1.06L9.06 9.75l1.22 1.22a.75.75 0 1 1-1.06 1.06L8 10.81l-1.22 1.22a.75.75 0 0 1-1.06-1.06l1.22-1.22-1.22-1.22a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function FolderPlus(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M3.5 2A1.5 1.5 0 0 0 2 3.5v9A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 12.5 4H9.621a1.5 1.5 0 0 1-1.06-.44L7.439 2.44A1.5 1.5 0 0 0 6.38 2H3.5ZM8 6a.75.75 0 0 1 .75.75v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.5A.75.75 0 0 1 8 6Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function DocumentDuplicate(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
    >
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 2h2.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 1 .439 1.061V9.5A1.5 1.5 0 0 1 12 11V8.621a3 3 0 0 0-.879-2.121L9 4.379A3 3 0 0 0 6.879 3.5H5.5Z" />
      <path d="M4 5a1.5 1.5 0 0 0-1.5 1.5v6A1.5 1.5 0 0 0 4 14h5a1.5 1.5 0 0 0 1.5-1.5V8.621a1.5 1.5 0 0 0-.44-1.06L7.94 5.439A1.5 1.5 0 0 0 6.878 5H4Z" />
    </svg>
  );
}

export function PencilSquare(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
    >
      <path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z" />
      <path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z" />
    </svg>
  );
}

export function RecordIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <circle cx="16" cy="16" r="4" fill="currentColor" />
      <path
        fill="currentColor"
        d="M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14s14-6.3 14-14S23.7 2 16 2m0 20c-3.3 0-6-2.7-6-6s2.7-6 6-6s6 2.7 6 6s-2.7 6-6 6"
      />
    </svg>
  );
}

export function KeyboardIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 5h8c2.828 0 4.243 0 5.121.879C22 6.757 22 8.172 22 11v2c0 2.828 0 4.243-.879 5.121C20.243 19 18.828 19 16 19H8c-2.828 0-4.243 0-5.121-.879C2 17.243 2 15.828 2 13v-2c0-2.828 0-4.243.879-5.121C3.757 5 5.172 5 8 5m-2 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-.25 3a.75.75 0 0 1-.75.75H7a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 .75.75"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function ScreenShareIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M8 14h2v-2q0-.425.288-.712T11 11h2v2l3-3l-3-3v2h-2q-1.25 0-2.125.875T8 12zm-4 4q-.825 0-1.412-.587T2 16V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v11q0 .825-.587 1.413T20 18zm-3 3v-2h22v2z"
      ></path>
    </svg>
  );
}

export function ArtistsIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="currentColor"
        d="m15.75 8l-3.74-3.75a3.99 3.99 0 0 1 6.82-3.08A4 4 0 0 1 15.75 8m-13.9 7.3l9.2-9.19l2.83 2.83l-9.2 9.2l-2.82-2.84zm-1.4 2.83l2.11-2.12l1.42 1.42l-2.12 2.12l-1.42-1.42zM10 15l2-2v7h-2z"
      ></path>
    </svg>
  );
}

export function AlbumsIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 56 56"
      {...props}
    >
      <path
        fill="currentColor"
        d="M16.844 3.637c.14-1.992 1.289-3.024 3.445-3.024h14.93c2.156 0 3.281 1.032 3.422 3.024zm-4.149 6.492c.352-2.133 1.36-3.305 3.703-3.305h22.524c2.344 0 3.351 1.172 3.703 3.305zm1.899 45.258c-4.875 0-7.36-2.414-7.36-7.266v-27c0-4.828 2.485-7.265 7.36-7.265h26.812c4.899 0 7.36 2.437 7.36 7.265v27c0 4.828-2.438 7.266-6.657 7.266zM34.44 30.635c1.019-.276 1.337-.488 1.337-1.719v-4.159c0-.806-.276-1.167-1.4-.891l-6.218 1.549c-1.04.255-1.273.467-1.273 1.719v9.57c0 .934-.085 1.104-1.146 1.4l-1.952.51c-1.931.51-3.565 1.655-3.565 3.735c0 1.803 1.358 3.119 3.501 3.119c3.035 0 5.093-2.186 5.093-5.263v-7.278c0-.785.17-.997.658-1.104z"
      ></path>
    </svg>
  );
}
