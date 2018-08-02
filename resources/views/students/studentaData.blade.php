@foreach($students as $index => $student)
    <tr>
        <td>{{ $index + 1 }}</td>
        <td>{{ $student->name }}</td>
        <td>{{ $student->age }}</td>
        <td>{{ $student->image }}</td>
        <td>{{ $student->code }}</td>
    </tr>
    @endforeach