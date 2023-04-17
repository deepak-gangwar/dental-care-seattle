import { createRef, Component } from "react"

class NativeScroll extends Component {
    constructor(props) {
        super(props)
        this.element = createRef()
    }

    lock() {
        this.element.current.style.width = "100%",
            this.element.current.style.position = "fixed",
            this.element.current.style.top = `${-1 * c.Y.position}px`
    }

    unlock() {
        this.element.current.style.removeProperty("width"),
            this.element.current.style.removeProperty("position"),
            this.element.current.style.removeProperty("top")
    }

    render() {
        const { children } = this.props;
        return (
            <div ref={this.element}>
                {children}
            </div>
        );
    }
}

// we need u.W and i.ZP and c.Y in this class so import them
// I guess they all are coming in from _app.js
class SmoothScroll extends Component {
    constructor() {
        super(props)
        this.ui = {
            container: createRef(),
            content: createRef()
        }
    }

    // EVENT HANDLERS
    // ==============

    // ok so handling functions are the ones written in constructor probably
    // so i infer they are there so that to bind this
    // so another great way to do that is to write them as arrow functions 
    // These `handle` functions are usually passed as callbacks to the appropriate event listeners in the component's JSX

    handleResize = () => {
        this.setSize()
        this.setTransform()
    }

    handleTick = () => {
        this.setTransform()
    }

    // LIFECYCLE METHODS
    // =================

    componentDidMount() {
        this.isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
        this.setSize()
        this.setTransform()
        this.setupEventListeners()
    }

    componentWillUnmount() {
        this.removeEventListeners()
    }

    render() {
        const { children } = this.props;
        return (
            <div className={styles.container} ref={this.ui.container}>
                <div className={styles.content} ref={this.ui.content}>
                    {children}
                </div>
            </div>
        );
        // The children inside the content are instantiations of block component
        // because in the final code, they look like BlockHero_something, BlockContent1_section_blah, etc.
        // i guess so we would do multiple <Block> passed as children
    }

    lock() {
        this.ui.container.current.style.height = "100vh"
    }

    unlock() {
        this.setSize()
        this.setTransform()
    }

    setupEventListeners() {
        // I guess these are bing being called on window probably
        u.W.addEventListener("resize", this.handleResize)
        u.W.addEventListener("resize:complete", this.handleResize)
        // ticker is a method in GSAP that allows you to create a single animation loop for all tweens in the system.
        i.ZP.ticker.add(this.handleTick)
    }

    removeEventListeners() {
        u.W.removeEventListener("resize", this.handleResize)
        u.W.removeEventListener("resize:complete", this.handleResize)
        i.ZP.ticker.remove(this.handleTick)
    }

    setSize() {
        this.ui.container.current.style.height = `${this.ui.content.current.clientHeight}px`
    }

    setTransform() {
        // this.isSafari ? this.ui.content.current.style.top = "".concat(-1 * c.Y.position, "px") : this.ui.content.current.style.transform = "matrix(1.00, 0.00, 0.00, 1.00, 0, ".concat(-1 * c.Y.position, ")")
        if (this.isSafari) {
            this.ui.content.current.style.top = `${-1 * c.Y.position}px`
        } else {
            this.ui.content.current.style.transform = `matrix(1.00, 0.00, 0.00, 1.00, 0, ${-1 * c.Y.position})`
        }
    }
}

// j class would be the default export of index.js or current file

// I guess we have created state which has only one property called touch.
// and we have created two classes above as nativeScroll and SmoothScroll because
// if we can switch between those two based on touch device.

// original name w, O, and j respectively
export default class Scroll extends Component {
    constructor() {
        this.state = {
            touch: ("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0)
        }

        this.components = {
            nativeScroll: createRef(),
            smoothScroll: createRef()
        }
    }

    handleLock() {
        this.lock()
    }

    handleUnlock() {
        this.unlock()
    }

    componentDidMount() {
        // Check if touch is supported and update state accordingly
        const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
        if (isTouch !== this.state.touch) {
            this.setState({ touch: isTouch });
        }

        c.Y.addEventListener("lock", this.handleLock)
        c.Y.addEventListener("unlock", this.handleUnlock)
    }

    componentWillUnmount() {
        c.Y.removeEventListener("lock", this.handleLock)
        c.Y.removeEventListener("unlock", this.handleUnlock)
    }

    lock() {
        this.state.touch ? this.components.nativeScroll.current.lock() : this.components.smoothScroll.current.lock()
    }

    unlock() {
        this.state.touch ? this.components.nativeScroll.current.unlock() : this.components.smoothScroll.current.unlock()
    }

    render() {
        const { children } = this.props
        return (this.state.touch ?
            <NativeScroll ref={this.components.nativeScroll}>{children}</NativeScroll> :
            <SmoothScroll ref={this.components.smoothScroll}>{children}</SmoothScroll>
        );
    }
}

// this is also a default export, so i guess this would be in another file.
// import l.Y
class Block extends Component {
    constructor() {
        this.components = {
            blocks: createRef()
        }
    }

    componentDidMount() {
        l.Y.reset()
        this.transitionIn()
    }

    componentWillUnmount() {
        this.killTimelines()
    }

    render() {
        const { blocks, layout } = this.props;

        return (
            <>
                {/* Scroll component */}
                <Scroll>
                    {/* c.Z component */}
                </Scroll>
                {/* gtag manager component */}
            </>
        )
    }

    killTimelines() {
        if (this.tlTransitionIn) {
            this.tlTransitionIn.kill()
            this.tlTransitionIn = null
        }
    }
}


// in the render function s.Z is the scroll component