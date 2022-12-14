// cách 2 xử lý bảng
/*
const y = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
const x = [...Array(18).keys()];
const seats = []
for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < y.length; j++) {
        if (!seats[j]) seats[j] = [];
        seats[j].push(`${y[j]}${i + 1}`);
    }
}

{
    seats.map((seat, i) => (
        <>
            {!i && (
                <tr>
                    <td></td>
                    {seat.map((_, index) => (
                        <td key={index}>{index + 1}</td>
                    ))}
                </tr>
            )}
            <tr>
                <td>{y[i]}</td>
                {seat.map((code) => (
                    <td>
                        <FontAwesomeIcon
                            key={code}
                            onClick={() => handleLocation(code)}
                            className={booked.includes(code) ? 'booked' : customerSeats.includes(code) ? 'choose' : ''}
                            icon={faCouch}
                        ></FontAwesomeIcon>
                    </td>
                ))}
            </tr>
        </>
    ));
}
*/
