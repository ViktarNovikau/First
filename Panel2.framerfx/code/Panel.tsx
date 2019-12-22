import * as React from "react"
import { Override, Data, motionValue, useTransform } from "framer"

const handleX = motionValue(0)
const data = Data({ width: 0 })

export function RightPanel(): Override {
    return {
        animate: { width: data.width },
    }
}

export function ClosePanel(): Override {
    return {
        onTap() {
            data.width = 0
        },
    }
}

export function OpenPanel(): Override {
    return {
        onTap() {
            data.width = 450
        },
    }
}
