import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Navigation = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 2rem;
`

const NavLinks = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 2rem;
	list-style: none;
`

const ResumeButton = styled.button`
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 10s ease infinite;
	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
`

export default function Nav() {
	return (
		<Navigation>
			<Link to="/">pinespace</Link>
			<NavLinks>
				<li>
					<Link to="/about">about</Link>
				</li>
				<li>
					<Link to="/about#experience">experience</Link>
				</li>
				<li>
					<Link to="/#projects">projects</Link>
				</li>
				<li>
					<Link to="/#contact">contact</Link>
				</li>
				<li>
					<a href="https://google.com">
						<ResumeButton>resume</ResumeButton>
					</a>
				</li>
			</NavLinks>
		</Navigation>
	)
}
