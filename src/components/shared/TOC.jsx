import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment } from 'react'

export const TOC = ({ type, lenis, isRoot = false, isActive, ...props }) => {
 if (type === 'link') {
  return (
    <Link
      onClick={(e) => {
        e.preventDefault();

        const id = props?.href?.replace('#', '');
        const el = document.querySelector(`[id="${id}"]`);

        if (el) {
          lenis?.scrollTo(el);
        }
      }}
      href={props?.href}
      className={
        isActive(String(props?.href).replace('#', '')) ? 'active' : ''
      }
    >
      {props?.text}
    </Link>
  );
}


  const Wrapper = isRoot ? Fragment : 'div'
  const wProps = isRoot ? {} : { className: type == 'list' ? 'pl-2' : '' }
  return (
    <Wrapper {...wProps}>
      {props?.children?.map((c, i) => (
        <TOC key={i} {...c} isActive={isActive} lenis={lenis} />
      ))}
    </Wrapper>
  )
}
