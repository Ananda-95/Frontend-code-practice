import { useState } from "react";

const TreeNode = ({node}) => {
    const [checked, setChecked] = useState(false);
    const handleChecked = (e) => {
        setChecked(e.target.checked)
    }

    return(
        <>
        <input type="checkbox" checked={checked} onChange={handleChecked} />
        <span>{node.name}</span>

        <div>
            {
                checked && node.children && (
                    <div>
                        {
                            node.children.map((child)=>(
                                <TreeNode key={child.id} node={child} />
                            ))
                        }
                        </div>
                )
            }
        </div>
        </>
    )

}

export default TreeNode