import React,{useRef} from 'react';

function IncomeForm({income,setIncome}) {
    const bname = useRef(null);
    const desc = useRef(null);
    const date = useRef(null);
    const price = useRef(null);
    const approve= useRef(null);

    const AddIncome = e => {
        e.preventDefault();

        let d = date.current.value.split("-");
        let newD = new Date(d[0], d[1], d[2]);

        setIncome([...income, {
            "bname": bname.current.value,
            "desc": desc.current.value,
            "price": price.current.value,
            "approve": approve.current.value,
            "date": newD.getTime()
        }]);
        
        bname.current.value = "";
        desc.current.value = "";
        price.current.value = null;
        date.current.value = null;
    }

    return (
        <form className="income-form" onSubmit={AddIncome}>
            <div className="form-inner">
                <input type="text" required={true} name="bname" id="bname" placeholder="Budget Name..." ref={bname} />
                <input type="text" required={true} name="desc" id="desc" placeholder="Budget Description..." ref={desc} />
                <input type="number" required={true} name="price" id="price" placeholder=" Budget Amount..." ref={price} />
                <input type="date" required={true} name="date" id="date" placeholder="Date..." ref={date} />
                <select name="approve" id="approve" ref={approve}>
                    <option value="Approved">Approved</option>
                    <option value="Pending">Pending</option>
                </select>
                <input type="submit" value="Submit Budget"/>
            </div>
        </form>
    )
}