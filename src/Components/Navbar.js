import React from "react";

function Navbar(props) {
	return (
		<header className='header'>
			<a href='#'>
				<h1 className='logo'>Phrancois</h1>
			</a>
			{/* <Link href='/'>
    <a>
      <Logo />
    </a>
  </Link> */}
			<nav>
				<ul>
					<li>
						{" "}
						<a href='#'>More</a>
						{/* <Link href='/posts'>Posts</Link> */}
					</li>
					<li>
						<a href='#'>Contact</a>
						{/* <Link href='/contact'>Contact</Link> */}
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Navbar;
