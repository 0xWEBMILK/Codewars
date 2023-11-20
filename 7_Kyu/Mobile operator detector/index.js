const detectOperator = (a) => {
    const operators = {
        "039": "Golden Telecom",
        "050": "MTS",
        "063": "Life:)",
        "066": "MTS",
        "067": "Kyivstar",
        "068": "Beeline",
        "093": "Life:)",
        "095": "MTS",
        "096": "Kyivstar",
        "097": "Kyivstar",
        "098": "Kyivstar",
        "099": "MTS"
    }

    return (operators[/.../g.exec(String(a).slice(1))] ? operators[/.../g.exec(String(a).slice(1))] : "no info")
}