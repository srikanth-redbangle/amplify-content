import PropTypes from 'prop-types'
import { forwardRef } from 'react'
import { cx } from 'class-variance-authority'
import { Root, Item, Content, Header, Trigger } from '@radix-ui/react-accordion'
import { Chevron } from '@/components/icons'

const Accordion = ({
  data = [],
  // defaultValue = '0',
  //   chevron = 'plus',
  hasNumber = false,
  customClass,
}) => (
  <Root
    className="w-full"
    type="single"
    // defaultValue={defaultValue}
    collapsible
  >
    {data.map(({ key, heading, content }, index) => (
      <AccordionItem key={key} value={key}>
        <AccordionTrigger
          index={hasNumber ? index + 1 : null}
          //   chevron={chevron}
          customClass={customClass}
        >
          {heading}
        </AccordionTrigger>
        <AccordionContent>{content}</AccordionContent>
      </AccordionItem>
    ))}
  </Root>
)

Accordion.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      heading: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.node,
      ]),
      content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.node,
      ]),
    })
  ),
  hasNumber: PropTypes.bool,
  defaultValue: PropTypes.string,
  //   chevron: PropTypes.string,
}

const AccordionItem = forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Item
      className={cx(
        'group mt-px overflow-hidden border-b border-b-rb-black border-opacity-15 first:-mt-5 focus-within:relative focus-within:shadow-[0_0_0_0px] ',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Item>
  )
)
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = forwardRef(
  ({ children, className, index, customClass, ...props }, forwardedRef) => (
    <Header className="flex !font-opensans">
      <Trigger
        className={cx(
          `${customClass} flex flex-1 cursor-pointer items-center justify-between  py-5 text-base leading-7.5 tracking-[-0.4px] font-semibold text-rb-black outline-none transition-none`,
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <span className="inline-flex flex-wrap text-left">
          {index != null && `${`${index}`.padStart(2, '0')}.`}
          {index != null && <>&nbsp;</>}
          {children}
        </span>

        <Chevron className="h-6 w-6 transition-transform group-data-[state='open']:rotate-180 text-rb-black/60" />
      </Trigger>
    </Header>
  )
)
AccordionTrigger.displayName = 'AccordionTrigger'

const AccordionContent = forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Content
      className={cx(
        'overflow-hidden text-base data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="pb-5 text-rb-black/80">{children}</div>
    </Content>
  )
)
AccordionContent.displayName = 'AccordionContent'
export { Accordion }
