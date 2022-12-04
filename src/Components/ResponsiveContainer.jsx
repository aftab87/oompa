import React from 'react';

/**
 * ### This is a Container that automatically organizes its children.
 *
 * To use:<br>
 *      &lt;ResponsiveContainer&gt;<br>
 *          &emsp;&emsp;&lt;p className="p-3 text-danger bg-warning"&gt;Hello World&lt;/p&gt;<br>
 *          &emsp;&emsp;&lt;p className="p-3 text-warning bg-danger"&gt;Hello World&lt;/p&gt;<br>
 *      &lt;/ResponsiveContainer&gt;
 * @param {props}
 * @returns {JSX.Element}
 * @constructor
 */
const ResponsiveContainer = ({children, className}) => {

    /**
     * Returns the number of children of this ResponsiveContainer
     * @returns {number}
     */
    const getSize = () => {
        if (!children)
            return 0
        else if (!Array.isArray(children)) // If it's not an array, it's just 1 object
            return 1
        else
            return children.length
    }


    /**
     * Returns
     * @returns {JSX.Element}
     */
    const getContainerWithChildren = () => {
        let size = getSize()

        //Return the container with its child as is if 1 or fewer children
        if (size <= 1) {
            return (
                <div className={className}>
                    {children}
                </div>
            )
        }

        // set colSize to col-md-6 if even number of children or col-md-4 if odd
        let colSize = size % 2 === 0 ? 'col-md-6' : 'col-md-4'

        // Make the container a row and get the list of children modified with the correct colSize
        return (
            <div className={className ? className + " row" : "row"}>
                {children.map((child, index) => modifyChild(child, index, colSize))}
            </div>
        )
    }

    /**
     * Returns the given child with a key and the give colSize class
     * @param child
     * @param index
     * @param colSize
     * @returns {React.DetailedReactHTMLElement<{className: string, key}, HTMLElement>}
     */
    const modifyChild = (child, index, colSize) => {
        return React.cloneElement(child, {
            key: index,
            className: child.props && child.props.className ? child.props.className + ' ' + colSize : colSize
        });
    }

    return (
        getContainerWithChildren()
    );
}

export default ResponsiveContainer;
