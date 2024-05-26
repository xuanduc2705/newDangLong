import { Accordion as Accordions, AccordionTab as AccordionTabs } from 'primereact/accordion'

const AccordionTab = ({ ...prop }) => {
    return <AccordionTabs {...prop} />
}

const Accordion = ({ ...rest }) => {
    return <Accordions {...rest} />
}

export { Accordion, AccordionTab }
