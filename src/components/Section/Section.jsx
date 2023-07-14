import { PropTypes } from "prop-types"
import { SectionTitle, StyledSection } from "./Styled.section"


export const Section = ({children, title}) => {
    return (
        <StyledSection>
            <SectionTitle>{title}</SectionTitle>
            {children}
        </StyledSection>
    )
}

Section.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired
}