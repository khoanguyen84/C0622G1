// jsx = JavaScript XML

// const h1 = <h3 className="heading_1">Learing JSX</h3>;

const email = "khoa.nguyen@codegym.vn";
const pw = "123456";

const handleCancel = () => {
    alert("Cancel")
}
const form_area = (<form>
    <div className="form-group">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" className="form-control" value={email} />
    </div>
    <div className="form-group">
        <label style={{
            color: "red"
        }}>Password</label>
        <input type="password" className="form-control" value={pw} />
    </div>
    <div className="form-group">
        <button className="btn btn-success" onClick={() => { alert("login") }}>Login</button>
        <button className="btn btn-dark" onClick={handleCancel}>Cancel</button>
    </div>
</form>)

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(form_area);
